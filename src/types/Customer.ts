import Link from "./Link";

type Customer = {
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

export default Customer;
