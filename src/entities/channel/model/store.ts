import { create } from "zustand";
import type { Channel, ChannelFromApi } from "./types";

interface ChannelState {
  channels: Channel[];
  addChannels: (channels: ChannelFromApi[]) => void;
  setChannels: (channels: ChannelFromApi[]) => void;
  updateChannel: (name: string, data: Partial<Channel>) => void;
  toggleExtendedChannel: (name: string) => void;
}

export const useChannelStore = create<ChannelState>((set) => ({
  channels: [],

  addChannels: (newChannels) =>
    set((state) => ({
      channels: [
        ...state.channels,
        ...newChannels.map((channel) => ({
          ...channel,
          isExtended: false,
        })),
      ],
    })),

  setChannels: (channels) =>
    set({
      channels: channels.map((channel) => ({
        ...channel,
        isExtended: false,
      })),
    }),

  updateChannel: (name: string, data: Partial<Channel>) =>
    set((state) => ({
      channels: state.channels.map((channel) =>
        channel.name === name
          ? { ...channel, ...data }
          : channel
      ),
    })),
  toggleExtendedChannel: (name) =>
    set((state) => ({
      channels: state.channels.map((channel) =>
        channel.name === name
          ? { ...channel, isExtended: !channel.isExtended }
          : channel
      ),
    })),
}))
