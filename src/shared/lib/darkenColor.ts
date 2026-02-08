export function darkenColor(color: string, amount: number = 0.2): string {
  // HEX
  if (color.startsWith('#')) {
    const r: number = parseInt(color.slice(1, 3), 16);
    const g: number = parseInt(color.slice(3, 5), 16);
    const b: number = parseInt(color.slice(5, 7), 16);

    const darkR: number = Math.max(0, Math.min(255, Math.floor(r * (1 - amount))));
    const darkG: number = Math.max(0, Math.min(255, Math.floor(g * (1 - amount))));
    const darkB: number = Math.max(0, Math.min(255, Math.floor(b * (1 - amount))));

    return `rgb(${darkR}, ${darkG}, ${darkB})`;
  }

  if (color.startsWith('rgb')) {
    const nums: number[] = color.match(/\d+/g)?.map(Number) ?? [0, 0, 0];
    const [r, g, b] = nums.map(c => Math.max(0, Math.floor(c * (1 - amount))));
    return `rgb(${r}, ${g}, ${b})`;
  }

  return color;
}
