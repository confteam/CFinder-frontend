import { ruEnMap } from "../consts/ruEnMap";

export function translit(str: string) {
  str = str.toLowerCase();
  let variants: string[] = [""];

  for (const char of str) {
    const options = ruEnMap[char] ?? [char];
    variants = variants.flatMap(v => options.map(opt => v + opt));
  }

  return variants;
}
