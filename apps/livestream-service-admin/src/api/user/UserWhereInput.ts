import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChatListRelationFilter } from "../chat/ChatListRelationFilter";
import { DonationListRelationFilter } from "../donation/DonationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { LivestreamListRelationFilter } from "../livestream/LivestreamListRelationFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  chats?: ChatListRelationFilter;
  donations?: DonationListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isBlocked?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  livestreams?: LivestreamListRelationFilter;
  profilePicture?: StringNullableFilter;
  username?: StringFilter;
};
