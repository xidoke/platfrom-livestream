import { Chat } from "../chat/Chat";
import { Donation } from "../donation/Donation";
import { User } from "../user/User";

export type Livestream = {
  category: string | null;
  chats?: Array<Chat>;
  createdAt: Date;
  description: string | null;
  donations?: Array<Donation>;
  endTime: Date | null;
  id: string;
  recordingUrl: string | null;
  startTime: Date | null;
  status: string | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
  viewerCount: number | null;
};
