import { SearchChannelsInput } from "@/features/SearchChannels";
import { SearchChannelsTags } from "@/widgets/ChannelTags";

export function SearchChannels() {
  return (
    <div className="pb-4">
      <SearchChannelsInput />
      <SearchChannelsTags className="mt-4" />
    </div>
  );
}
