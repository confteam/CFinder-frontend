import { create } from "zustand";

interface SearchState {
  query: string;
  sort: "asc" | "desc";
  toggleSort: () => void;
  setQuery: (value: string) => void;
  reset: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  sort: "desc",
  toggleSort: () => set((state) => ({
    sort: state.sort === "asc" ? "desc" : "asc"
  })),
  setQuery: (value: string) => set({ query: value }),
  reset: () => set({ query: "" }),
}))
