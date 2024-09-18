import { ChatCreateNestedManyWithoutLivestreamsInput } from "./ChatCreateNestedManyWithoutLivestreamsInput";
import { DonationCreateNestedManyWithoutLivestreamsInput } from "./DonationCreateNestedManyWithoutLivestreamsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LivestreamCreateInput = {
  category?: string | null;
  chats?: ChatCreateNestedManyWithoutLivestreamsInput;
  description?: string | null;
  donations?: DonationCreateNestedManyWithoutLivestreamsInput;
  endTime?: Date | null;
  recordingUrl?: string | null;
  startTime?: Date | null;
  status?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
  viewerCount?: number | null;
};
