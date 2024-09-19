import { ChatUpdateManyWithoutUsersInput } from "./ChatUpdateManyWithoutUsersInput";
import { DonationUpdateManyWithoutUsersInput } from "./DonationUpdateManyWithoutUsersInput";
import { LivestreamUpdateManyWithoutUsersInput } from "./LivestreamUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bio?: string | null;
  chats?: ChatUpdateManyWithoutUsersInput;
  donations?: DonationUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  isBlocked?: boolean | null;
  lastName?: string | null;
  livestreams?: LivestreamUpdateManyWithoutUsersInput;
  password?: string;
  profilePicture?: string | null;
  roles?: InputJsonValue;
  username?: string;
};
