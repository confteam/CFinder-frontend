import type { TagDto } from "@/entities/Tag/model/types";

export interface ChannelDto {
  caption: string;
  chan_id: number;
  colors: string[];
  join_link: string;
  name: string;
  pfp: string;
  tags: TagDto[];
  subs_count: number;
}

export type Channel = {
  id: number;
  pfp: string;
  colors: string[];
  caption: string;
  link: string;
  name: string;
  tags: string[];
  subs: number;
  isExtended: boolean;
}
