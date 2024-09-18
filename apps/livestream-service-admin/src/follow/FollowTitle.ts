import { Follow as TFollow } from "../api/follow/Follow";

export const FOLLOW_TITLE_FIELD = "followerId";

export const FollowTitle = (record: TFollow): string => {
  return record.followerId?.toString() || String(record.id);
};
