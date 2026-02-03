import { api } from "@/shared"
import { mapChannelDtosToChannels } from "../lib/mappers";
import type { Channel } from "../model/types";

export const channelApi = {
  async getAll(): Promise<Channel[]> {
    const { data } = await api.get("/cf/search");
    return mapChannelDtosToChannels(data.items);
  }
}
