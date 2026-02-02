import { TAG_COLORS } from "../config/colors";

export function getTagColor(index: number, selected: boolean) {
  const colorPair = TAG_COLORS[index % TAG_COLORS.length];
  return selected ? colorPair.selected : colorPair.base;
}
