import { Dayjs } from "dayjs";

export type Link = {
  rel: string;
  href: string;
};

export type Customer = {
  id?: number;
  firstname: string;
  lastname: string;
  streetaddress: string;
  postcode: string;
  city: string;
  email: string;
  phone: string;
  content: any[];
  links: Link[];
};

export type Training = {
  id?: number;
  date: Dayjs;
  duration: number;
  activity: string;
  customer: Customer;
  content: any[];
  links: Link[];
};
