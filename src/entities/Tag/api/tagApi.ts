import { api } from "@/shared";
import type { Tag, TagDto } from "../model/types";
import { mapTagDtosToTags } from "../lib/mappers";

export const tagApi = {
  async getAll(): Promise<Tag[]> {
    const { data } = await api.get<TagDto[]>("/cf/tags");
    return mapTagDtosToTags(data)
  }
}
