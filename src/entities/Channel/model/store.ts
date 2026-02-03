import { create } from "zustand";
import type { Channel } from "./types";
import { channelApi } from "../api/channelApi";

interface ChannelState {
  channels: Channel[];

  loading: boolean;
  error?: string;
  fetchChannels: () => void;

  setChannels: (channels: Channel[]) => void;
  toggleExtendedChannel: (name: string) => void;
}

export const useChannelStore = create<ChannelState>((set) => ({
  channels: [],

  loading: false,
  fetchChannels: async () => {
    set({ loading: true, error: undefined });

    try {
      const channels = await channelApi.getAll();
      set({ channels });
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch channels" });
    } finally {
      set({ loading: false });
    }
  },

  setChannels: (channels) => set({ channels }),
  toggleExtendedChannel: (name) =>
    set((state) => ({
      channels: state.channels.map((channel) =>
        channel.name === name
          ? { ...channel, isExtended: !channel.isExtended }
          : channel
      ),
    })),
}))
