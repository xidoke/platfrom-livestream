import { LivestreamWhereUniqueInput } from "../livestream/LivestreamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DonationCreateInput = {
  amount?: number | null;
  livestream?: LivestreamWhereUniqueInput | null;
  message?: string | null;
  user?: UserWhereUniqueInput | null;
};
