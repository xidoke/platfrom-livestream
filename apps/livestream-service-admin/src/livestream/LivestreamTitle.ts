import { Livestream as TLivestream } from "../api/livestream/Livestream";

export const LIVESTREAM_TITLE_FIELD = "title";

export const LivestreamTitle = (record: TLivestream): string => {
  return record.title?.toString() || String(record.id);
};
