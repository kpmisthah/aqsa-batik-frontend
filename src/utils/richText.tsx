import React from "react";

/**
 * Renders admin-editable plain text into paragraphs/lists/emphasis, using a
 * lightweight convention so long-form content (like a company history) can
 * stay editable as plain text without losing its structure:
 * - A blank line starts a new paragraph/block.
 * - A block where every line starts with "- " becomes a bullet list (using
 *   the site's checkmark-icon list style).
 * - A block wrapped in "**...**" renders as bold, accent-colored, italic
 *   emphasis (the "big reveal" style used for turning-point lines).
 * - A block wrapped in "*...*" renders as bold emphasis only (no color).
 * - A single "\n" inside a plain paragraph becomes a <br/>.
 */
export function renderRichText(text: string, keyPrefix = "rt"): React.ReactNode {
  if (!text) return null;
  const blocks = text.split(/\n\s*\n/);

  return (
    <>
      {blocks.map((block, i) => {
        const trimmedBlock = block.trim();
        if (!trimmedBlock) return null;
        const lines = trimmedBlock.split("\n").map((l) => l.trim()).filter(Boolean);

        const isList = lines.length > 0 && lines.every((l) => l.startsWith("- "));
        if (isList) {
          return (
            <ul key={`${keyPrefix}-${i}`} className="list-none space-y-2 pl-4 md:pl-6 border-l-2 border-primary/20 font-medium text-primary/90">
              {lines.map((l, j) => (
                <li key={j} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>{l.slice(2)}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (trimmedBlock.startsWith("**") && trimmedBlock.endsWith("**") && trimmedBlock.length > 4) {
          return (
            <p key={`${keyPrefix}-${i}`} className="font-bold text-accent italic mt-2">
              {trimmedBlock.slice(2, -2)}
            </p>
          );
        }

        if (trimmedBlock.startsWith("*") && trimmedBlock.endsWith("*") && trimmedBlock.length > 2) {
          return (
            <p key={`${keyPrefix}-${i}`} className="font-bold text-[14px] md:text-base text-primary">
              {trimmedBlock.slice(1, -1)}
            </p>
          );
        }

        return (
          <p key={`${keyPrefix}-${i}`}>
            {lines.map((l, j) => (
              <React.Fragment key={j}>
                {j > 0 && <br />}
                {l}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </>
  );
}
