// простая транслитерация ru <-> en
export const ruEnMap: Record<string, string[]> = {
  а: ["a"], б: ["b"], в: ["v"], г: ["g"], д: ["d"],
  е: ["e"], ё: ["e"], ж: ["zh"], з: ["z"], и: ["i"],
  й: ["y", "i"], к: ["k", "c"], л: ["l"], м: ["m"],
  н: ["n"], о: ["o"], п: ["p"], р: ["r"], с: ["s", "c"],
  т: ["t"], у: ["u"], ф: ["f"], х: ["h", "kh"], ц: ["c", "ts"],
  ч: ["ch"], ш: ["sh"], щ: ["shch"], ы: ["y"], э: ["e"],
  ю: ["yu"], я: ["ya"],
};

export function translit(str: string) {
  return str
    .toLowerCase()
    .split("")
    .map((c) => ruEnMap[c] ?? c)
    .join("");
}

// расстояние Левенштейна для опечаток
