import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChatListRelationFilter } from "../chat/ChatListRelationFilter";
import { DonationListRelationFilter } from "../donation/DonationListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LivestreamWhereInput = {
  category?: StringNullableFilter;
  chats?: ChatListRelationFilter;
  description?: StringNullableFilter;
  donations?: DonationListRelationFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  recordingUrl?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  viewerCount?: IntNullableFilter;
};
