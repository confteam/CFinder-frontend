import { expandQuery } from "./expandQuery";
import { levenshtein } from "./levenshtein";
import { normalize } from "./normalise";
import { translit } from "./translit";

export function getMatchScore(query: string, text: string) {
  query = normalize(query);
  text = normalize(text);

  if (!query) return 0;

  const textVariants = [text, ...translit(text)].map(normalize);
  const queryVariants = expandQuery(query)
    .flatMap(w => translit(w))
    .map(normalize);

  let score = 0;

  for (const qv of queryVariants) {
    for (const tv of textVariants) {
      // точное вхождение
      if (tv.includes(qv)) score += 8;

      // совпадение по началу слов
      const words = tv.split(" ");
      for (const w of words) {
        if (w.startsWith(qv)) score += 5;

        // fuzzy
        const dist = levenshtein(qv, w);
        if (dist > 0 && dist <= Math.floor(qv.length / 3)) score += 3;
      }
    }
  }

  return score;
}
