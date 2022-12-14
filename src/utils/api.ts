import dayjs from "dayjs";
import { Customer, Training } from "./types";
import { getHrefByRel, getIdByRel } from "./helpers";

export async function getCustomerByHref(url: string): Promise<Customer> {
  const response = await fetch(url);
  return response.json();
}

export async function fetchAllCustomers(): Promise<Customer[]> {
  const response = await fetch(
    "https://customerrest.herokuapp.com/api/customers"
  );
  const data = await response.json();

  const customers = data.content.map((customer: Customer) => ({
    ...customer,
    id: getIdByRel(customer.links, "self"),
  }));

  return Promise.all(customers);
}

export async function fetchAllTrainings(): Promise<Training[]> {
  const response = await fetch(
    "https://customerrest.herokuapp.com/api/trainings"
  );
  const data = await response.json();

  const trainings = data.content.map(async (training: Training) => ({
    ...training,
    id: getIdByRel(training.links, "self"),
    date: dayjs(training.date),
    customer: await getCustomerByHref(getHrefByRel(training.links, "customer")),
  }));

  return Promise.all(trainings);
}
