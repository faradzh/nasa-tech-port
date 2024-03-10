import { format, sub } from "date-fns";

export const sevenDaysAgo = format(sub(new Date(), { days: 7 }), "yyyy-MM-dd");
