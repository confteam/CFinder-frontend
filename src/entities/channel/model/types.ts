export type ChannelFromApi = {
  name: string;
  tags: string[];
  background: string;
  image: string;
}

export type Channel = ChannelFromApi & {
  isExtended: boolean;
}
