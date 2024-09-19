import { Chat } from "../chat/Chat";
import { Donation } from "../donation/Donation";
import { Livestream } from "../livestream/Livestream";
import { JsonValue } from "type-fest";

export type User = {
  bio: string | null;
  chats?: Array<Chat>;
  createdAt: Date;
  donations?: Array<Donation>;
  email: string | null;
  firstName: string | null;
  id: string;
  isBlocked: boolean | null;
  lastName: string | null;
  livestreams?: Array<Livestream>;
  profilePicture: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
