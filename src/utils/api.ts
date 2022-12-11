import Customer from "../types/Customer";
import { getIdFromUrl } from "./helpers";

// eslint-disable-next-line import/prefer-default-export
export async function fetchCustomers(): Promise<Customer[]> {
  const response = await fetch(
    "https://customerrest.herokuapp.com/api/customers"
  );
  const data = await response.json();

  return data.content.map((customer: Customer) => ({
    id: getIdFromUrl(customer.links[0].href),
    ...customer,
  }));
}
