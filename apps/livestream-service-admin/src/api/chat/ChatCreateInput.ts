import { LivestreamWhereUniqueInput } from "../livestream/LivestreamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatCreateInput = {
  livestream?: LivestreamWhereUniqueInput | null;
  message?: string | null;
  user?: UserWhereUniqueInput | null;
};
