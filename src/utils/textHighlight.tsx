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
 * Renders heading text with one or more substrings styled as the site's
 * "highlight" accent (colored italic), matching the original hardcoded JSX
 * pattern (e.g. `Best-Selling <span className="text-highlight italic">Batik
 * Suit Collections</span> for Every Woman`) — but driven by plain
 * admin-editable strings instead of embedded markup. Supports "\n" for
 * manual line breaks, and multiple independently-highlighted words by
 * separating them with "|" (e.g. "Batik|Cotton Dress").
 */
export function renderWithHighlight(text: string, highlight?: string): React.ReactNode {
  if (!text) return text;
  const terms = (highlight || "").split("|").map((t) => t.trim()).filter(Boolean);
  if (terms.length === 0) return withLineBreaks(text, "l");

  const nodes: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    let bestIdx = -1;
    let bestTerm = "";
    for (const term of terms) {
      const idx = remaining.toLowerCase().indexOf(term.toLowerCase());
      if (idx !== -1 && (bestIdx === -1 || idx < bestIdx)) {
        bestIdx = idx;
        bestTerm = term;
      }
    }
    if (bestIdx === -1) {
      nodes.push(<React.Fragment key={key}>{withLineBreaks(remaining, `t-${key++}`)}</React.Fragment>);
      break;
    }
    const before = remaining.slice(0, bestIdx);
    const match = remaining.slice(bestIdx, bestIdx + bestTerm.length);
    if (before) nodes.push(<React.Fragment key={key}>{withLineBreaks(before, `b-${key++}`)}</React.Fragment>);
    nodes.push(<span key={key} className="text-highlight italic">{withLineBreaks(match, `m-${key++}`)}</span>);
    remaining = remaining.slice(bestIdx + bestTerm.length);
  }

  return <>{nodes}</>;
}
