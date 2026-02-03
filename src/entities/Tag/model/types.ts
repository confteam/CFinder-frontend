export type Tag = {
  id: number;
  name: string;
  selected: boolean;
}

export interface TagDto {
  tag_id: number;
  tag_text: string;
}
