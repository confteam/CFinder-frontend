import { useEffect } from "react";
import { useTagStore } from "../model/store";

export function useTags() {
  const { loading, error, fetchTags } = useTagStore();

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

  return { loading, error };
}
