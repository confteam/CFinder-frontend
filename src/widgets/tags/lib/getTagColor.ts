import { TAG_COLORS } from "../config/colors";

export function getTagColor(index: number) {
  return TAG_COLORS[index % TAG_COLORS.length];
}
