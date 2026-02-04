import type { Channel, ChannelDto } from "../model/types";

export function mapChannelDtoToChannel(dto: ChannelDto): Channel {
  return {
    id: dto.chan_id,
    pfp: dto.pfp,
    colors: dto.colors,
    caption: dto.caption,
    link: dto.join_link,
    name: dto.name,
    tags: dto.tags.map((tag) => tag.tag_text),
    subs: dto.subs_count,
    isExtended: false,
  }
}

export function mapChannelDtosToChannels(list: ChannelDto[]): Channel[] {
  return list.map(mapChannelDtoToChannel);
}
