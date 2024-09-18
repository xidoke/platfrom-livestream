import { StringFilter } from "../../util/StringFilter";
import { LivestreamWhereUniqueInput } from "../livestream/LivestreamWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatWhereInput = {
  id?: StringFilter;
  livestream?: LivestreamWhereUniqueInput;
  message?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
