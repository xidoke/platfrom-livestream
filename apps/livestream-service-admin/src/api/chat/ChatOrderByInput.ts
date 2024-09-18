import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  livestreamId?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
