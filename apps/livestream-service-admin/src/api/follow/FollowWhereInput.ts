import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowWhereInput = {
  followerId?: StringNullableFilter;
  followingId?: StringNullableFilter;
  id?: StringFilter;
};
