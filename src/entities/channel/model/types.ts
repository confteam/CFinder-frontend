import type { Tag } from "@/entities/tag/model/types";

export type ChannelFromApi = {
  name: string;
  tags: Tag[];
  background: string;
  image: string;
}

export type Channel = ChannelFromApi & {
  isExtended: boolean;
}
