import Link from "./Link";

type Training = {
  id?: number;
  date: string;
  duration: number;
  activity: string;
  customer: number;
  content: any[];
  links: Link[];
};

export default Training;
