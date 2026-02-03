import { create } from "zustand";
import type { Tag } from "./types";
import { tagApi } from "../api/tagApi";

interface TagStore {
  tags: Tag[];

  setTags: (tags: Tag[]) => void;
  toggleTag: (name: string) => void;
  selectTag: (name: string) => void;

  loading: boolean;
  fetchTags: () => void;
  error?: string;

  findTag: (name: string) => Tag | undefined;
  getSelected: () => Tag[];
  getUnselected: () => Tag[];
}

export const useTagStore = create<TagStore>((set, get) => ({
  tags: [],

  setTags: (tags) => set({ tags }),
  toggleTag: (name) => set((state) => ({
    tags: state.tags.map((t) => t.name === name ? { ...t, selected: !t.selected } : t)
  })),
  selectTag: (name) => set((state) => ({
    tags: state.tags.map((t) => t.name === name ? { ...t, selected: true } : t)
  })),

  loading: false,
  fetchTags: async () => {
    set({ loading: true, error: undefined });

    try {
      const tags = await tagApi.getAll();
      set({ tags });
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch tags" });
    } finally {
      set({ loading: false });
    }
  },

  findTag: (name) => get().tags.find((t) => t.name === name),
  getSelected: () => get().tags.filter((t) => t.selected),
  getUnselected: () => get().tags.filter((t) => !t.selected),
}))
