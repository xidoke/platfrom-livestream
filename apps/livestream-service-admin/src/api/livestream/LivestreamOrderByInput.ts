import { SortOrder } from "../../util/SortOrder";

export type LivestreamOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  recordingUrl?: SortOrder;
  startTime?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  viewerCount?: SortOrder;
};
