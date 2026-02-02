import { ChannelCards } from "@/widgets/ChannelCards";
import guseniza from "../../../assets/guseniza.jpg";
import { useEffect } from "react";
import { useChannelStore } from "@/entities/Channel";
import { useTagStore } from "@/entities/Tag";
import { SearchChannels } from "@/widgets/SearchChannels";

export function SearchPage() {
  const { setChannels } = useChannelStore();
  const { setTags } = useTagStore();

  useEffect(() => {
    setTags(["dating", "hate", "NSFW", "animal", "blood", "LGBT+", "safeplace"]);

    setChannels([
      {
        background: "purple",
        name: "bebra confession",
        tags: ["blood", "hate", "dating"],
        image: guseniza
      },
      {
        background: "purple",
        name: "ask confession",
        tags: ["blood", "hate", "dating"],
        image: guseniza
      },
      {
        background: "purple",
        name: "lgbt confession",
        tags: ["blood", "hate", "dating"],
        image: guseniza
      },
      {
        background: "purple",
        name: "cp confession",
        tags: ["blood", "hate"],
        image: guseniza
      },
      {
        background: "purple",
        name: "porn confession",
        tags: ["blood", "hate"],
        image: guseniza
      },
      {
        background: "purple",
        name: "relationship confession",
        tags: ["dating"],
        image: guseniza
      },
    ]);
  }, [])

  return (
    <main>
      <SearchChannels />
      <ChannelCards />
    </main>
  );
}
