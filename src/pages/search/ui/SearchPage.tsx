import { ChannelCards } from "@/widgets/channel";
import { SearchTop } from "@/widgets/search";
import guseniza from "../../../assets/guseniza.jpg";

export function SearchPage() {
  return (
    <main>
      <SearchTop />
      <ChannelCards
        channels={[
          {
            background: "purple",
            name: "bebra confession",
            tags: ["blood", "hate", "dating", "NSFW", "animal", "LGBT+", "safeplace", "game", "film", "diet"],
            image: guseniza
          },
          {
            background: "purple",
            name: "ask confession",
            tags: ["blood", "hate", "dating", "NSFW", "animal", "LGBT+", "safeplace", "game"],
            image: guseniza
          },
          {
            background: "purple",
            name: "lgbt confession",
            tags: ["blood", "hate", "dating", "NSFW", "animal", "LGBT+"],
            image: guseniza
          },
          {
            background: "purple",
            name: "cp confession",
            tags: ["blood", "hate", "dating", "NSFW"],
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
        ]}
      />
    </main>
  );
}
