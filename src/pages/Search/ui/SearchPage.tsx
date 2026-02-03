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
        subscribers: 4000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, commodi. Dolor sint accusamus ipsa velit soluta, neque fugiat? Facilis tempore unde",
        image: guseniza
      },
      {
        background: "purple",
        name: "ask confession",
        tags: ["blood", "hate", "dating"],
        subscribers: 5060,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, commodi. Dolor sint accusamus ipsa velit soluta, neque fugiat? Facilis tempore unde",
        image: guseniza
      },
      {
        background: "purple",
        name: "lgbt confession",
        tags: ["blood", "hate", "dating"],
        subscribers: 1003,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, commodi. Dolor sint accusamus ipsa velit soluta, neque fugiat? Facilis tempore unde",
        image: guseniza
      },
      {
        background: "purple",
        name: "cp confession",
        tags: ["blood", "hate"],
        subscribers: 10000,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, commodi. Dolor sint accusamus ipsa velit soluta, neque fugiat? Facilis tempore unde",
        image: guseniza
      },
      {
        background: "purple",
        name: "porn confession",
        tags: ["blood", "hate"],
        subscribers: 3070,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, commodi. Dolor sint accusamus ipsa velit soluta, neque fugiat? Facilis tempore unde",
        image: guseniza
      },
      {
        background: "purple",
        name: "relationship confession",
        tags: ["dating"],
        subscribers: 12300,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, commodi. Dolor sint accusamus ipsa velit soluta, neque fugiat? Facilis tempore unde",
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
