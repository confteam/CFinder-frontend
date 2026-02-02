import { create } from "zustand";
import type { Tag } from "./types";

interface TagStore {
  tags: Tag[];

  setTags: (names: string[]) => void;
  toggleTag: (name: string) => void;
  selectTag: (name: string) => void;

  findTag: (name: string) => Tag | undefined;
  getSelected: () => Tag[];
  getUnselected: () => Tag[];
}

export const useTagStore = create<TagStore>((set, get) => ({
  tags: [],

  setTags: (names) => set({ tags: names.map((name, i) => ({ name, selected: false, colorIndex: i })) }),
  toggleTag: (name) => set((state) => ({
    tags: state.tags.map((t) => t.name === name ? { ...t, selected: !t.selected } : t)
  })),
  selectTag: (name) => set((state) => ({
    tags: state.tags.map((t) => t.name === name ? { ...t, selected: true } : t)
  })),

  findTag: (name) => get().tags.find((t) => t.name === name),
  getSelected: () => get().tags.filter((t) => t.selected),
  getUnselected: () => get().tags.filter((t) => !t.selected),
}))
