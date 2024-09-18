import { ChatCreateNestedManyWithoutUsersInput } from "./ChatCreateNestedManyWithoutUsersInput";
import { DonationCreateNestedManyWithoutUsersInput } from "./DonationCreateNestedManyWithoutUsersInput";
import { LivestreamCreateNestedManyWithoutUsersInput } from "./LivestreamCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bio?: string | null;
  chats?: ChatCreateNestedManyWithoutUsersInput;
  donations?: DonationCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  livestreams?: LivestreamCreateNestedManyWithoutUsersInput;
  password: string;
  profilePicture?: string | null;
  roles: InputJsonValue;
  username: string;
};
