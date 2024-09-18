import { ChatUpdateManyWithoutLivestreamsInput } from "./ChatUpdateManyWithoutLivestreamsInput";
import { DonationUpdateManyWithoutLivestreamsInput } from "./DonationUpdateManyWithoutLivestreamsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LivestreamUpdateInput = {
  category?: string | null;
  chats?: ChatUpdateManyWithoutLivestreamsInput;
  description?: string | null;
  donations?: DonationUpdateManyWithoutLivestreamsInput;
  endTime?: Date | null;
  recordingUrl?: string | null;
  startTime?: Date | null;
  status?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
  viewerCount?: number | null;
};
