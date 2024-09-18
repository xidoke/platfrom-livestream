import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LivestreamWhereUniqueInput } from "../livestream/LivestreamWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DonationWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  livestream?: LivestreamWhereUniqueInput;
  message?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
