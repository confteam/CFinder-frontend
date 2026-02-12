import { synonyms } from "../consts/synonyms";

export function expandQuery(query: string): string[] {
  const words = query.toLowerCase().split(" ").filter(w => w.length >= 2);
  let expanded: Set<string> = new Set();

  for (const word of words) {
    expanded.add(word);
    if (synonyms[word]) {
      for (const syn of synonyms[word]) expanded.add(syn);
    }
  }

  return Array.from(expanded);
}
