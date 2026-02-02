import { ChannelCards } from "@/widgets/channel";
import { SearchTop } from "@/widgets/search";
import guseniza from "../../../assets/guseniza.jpg";
import { useEffect } from "react";
import { useChannelStore } from "@/entities/channel";
import { useTagStore } from "@/entities/tag";

export function SearchPage() {
  const { setChannels } = useChannelStore();
  const { setTags, findTag } = useTagStore();

  useEffect(() => {
    setTags(["dating", "hate", "NSFW", "animal", "blood", "LGBT+", "safeplace"]);
    const blood = findTag("blood")!;
    const hate = findTag("hate")!;
    const dating = findTag("dating")!;

    setChannels([
      {
        background: "purple",
        name: "bebra confession",
        tags: [blood, hate, dating],
        image: guseniza
      },
      {
        background: "purple",
        name: "ask confession",
        tags: [blood, hate, dating],
        image: guseniza
      },
      {
        background: "purple",
        name: "lgbt confession",
        tags: [blood, hate, dating],
        image: guseniza
      },
      {
        background: "purple",
        name: "cp confession",
        tags: [blood, hate],
        image: guseniza
      },
      {
        background: "purple",
        name: "porn confession",
        tags: [blood, hate],
        image: guseniza
      },
      {
        background: "purple",
        name: "relationship confession",
        tags: [dating],
        image: guseniza
      },
    ]);
  }, [])

  return (
    <main>
      <SearchTop />
      <ChannelCards />
    </main>
  );
}
