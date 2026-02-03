import type { Tag, TagDto } from "../model/types";

export function mapTagDtoToTag(dto: TagDto): Tag {
  return {
    id: dto.tag_id,
    name: dto.tag_text,
    selected: false
  }
}

export function mapTagDtosToTags(list: TagDto[]): Tag[] {
  return list.map(mapTagDtoToTag);
}

export function mapTagToTagDto(tag: Tag): TagDto {
  return {
    tag_id: tag.id,
    tag_text: tag.name,
  }
}
