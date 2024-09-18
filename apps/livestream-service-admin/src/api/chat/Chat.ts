import { Livestream } from "../livestream/Livestream";
import { User } from "../user/User";

export type Chat = {
  createdAt: Date;
  id: string;
  livestream?: Livestream | null;
  message: string | null;
  updatedAt: Date;
  user?: User | null;
};
