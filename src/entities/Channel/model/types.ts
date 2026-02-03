import type { TagDto } from "@/entities/Tag/model/types";

export interface ChannelDto {
  background: string;
  caption: string;
  chan_id: number;
  color: string[];
  join_link: string;
  name: string;
  pfp: string;
  tags: TagDto[];
  subs_count: number;
}

export type Channel = {
  id: number;
  background: string;
  pfp: string;
  color: string[];
  caption: string;
  link: string;
  name: string;
  tags: string[];
  subs: number;
  isExtended: boolean;
}
