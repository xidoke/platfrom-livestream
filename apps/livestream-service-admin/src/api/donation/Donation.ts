import { Livestream } from "../livestream/Livestream";
import { User } from "../user/User";

export type Donation = {
  amount: number | null;
  createdAt: Date;
  id: string;
  livestream?: Livestream | null;
  message: string | null;
  updatedAt: Date;
  user?: User | null;
};
