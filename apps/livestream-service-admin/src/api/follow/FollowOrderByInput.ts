import { SortOrder } from "../../util/SortOrder";

export type FollowOrderByInput = {
  createdAt?: SortOrder;
  followerId?: SortOrder;
  followingId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
