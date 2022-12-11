import { Dayjs } from "dayjs";
import Link from "./Link";

type Training = {
  id?: number;
  date: Dayjs;
  duration: number;
  activity: string;
  customer: number;
  content: any[];
  links: Link[];
};

export default Training;
