import React from "react";

/** Converts literal "\n" in admin-entered text into real line breaks,
 * matching the convention already used by the Home Slider admin form
 * ("Use \n for line breaks"). */
function withLineBreaks(text: string, keyPrefix: string): React.ReactNode {
  const lines = text.split("\n");
  if (lines.length === 1) return text;
  return lines.map((line, i) => (
    <React.Fragment key={`${keyPrefix}-${i}`}>
      {i > 0 && <br />}
      {line}
    </React.Fragment>
  ));
}

/**
 * Renders heading text with one substring styled as the site's "highlight"
 * accent (colored italic), matching the original hardcoded JSX pattern
 * (e.g. `Best-Selling <span className="text-highlight italic">Batik Suit
 * Collections</span> for Every Woman`) — but driven by plain admin-editable
 * strings instead of embedded markup. Supports "\n" for manual line breaks.
 */
export function renderWithHighlight(text: string, highlight?: string): React.ReactNode {
  if (!text) return text;
  if (!highlight) return withLineBreaks(text, "l");
  const idx = text.toLowerCase().indexOf(highlight.toLowerCase());
  if (idx === -1) return withLineBreaks(text, "l");
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + highlight.length);
  const after = text.slice(idx + highlight.length);
  return (
    <>
      {withLineBreaks(before, "b")}
      <span className="text-highlight italic">{withLineBreaks(match, "m")}</span>
      {withLineBreaks(after, "a")}
    </>
  );
}
