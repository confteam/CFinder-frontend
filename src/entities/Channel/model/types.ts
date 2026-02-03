export type ChannelFromApi = {
  name: string;
  tags: string[];
  background: string;
  image: string;
  subscribers: number;
  description: string;
}

export type Channel = ChannelFromApi & {
  isExtended: boolean;
}
