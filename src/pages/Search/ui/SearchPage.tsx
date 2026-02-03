import { useChannels } from "@/entities/Channel";
import { useTags } from "@/entities/Tag";
import { ChannelCards } from "@/widgets/ChannelCards";
import { SearchChannels } from "@/widgets/SearchChannels";

export function SearchPage() {
  const { loading: loadingTags, error: tagsError } = useTags();
  const { loading: loadingChannels, error: channelsError } = useChannels();

  if (loadingTags || loadingChannels) return null;
  if (tagsError || channelsError) return <div>Ошибка: {tagsError || channelsError}</div>;

  return (
    <main>
      <SearchChannels />
      <ChannelCards />
    </main>
  );
}
