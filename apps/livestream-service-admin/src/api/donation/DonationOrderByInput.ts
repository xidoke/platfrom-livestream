import { SortOrder } from "../../util/SortOrder";

export type DonationOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  livestreamId?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
