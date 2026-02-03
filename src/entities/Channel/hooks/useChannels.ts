import { useEffect } from "react";
import { useChannelStore } from "../model/store";

export function useChannels() {
  const { loading, error, fetchChannels } = useChannelStore();

  useEffect(() => {
    fetchChannels();
  }, [fetchChannels]);

  return { loading, error };
}
