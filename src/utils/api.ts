import dayjs from "dayjs";
import { Customer, Training } from "./types";
import { getHrefByRel, getIdByRel } from "./helpers";

export async function fetchCustomer(url: string): Promise<Customer> {
  const response = await fetch(url);
  const data = await response.json();
  return { ...data, id: getIdByRel(data?.links, "self") };
}

export async function fetchAllCustomers(): Promise<Customer[]> {
  const response = await fetch(
    "https://customerrest.herokuapp.com/api/customers"
  );
  const data = await response.json();

  const customers = data.content.map((customer: Customer) => ({
    ...customer,
    id: getIdByRel(customer?.links, "self"),
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
    customer: await fetchCustomer(getHrefByRel(training.links, "customer")),
  }));

  return Promise.all(trainings);
}

export async function createCustomer(customer: Customer) {
  const response = await fetch(
    "https://customerrest.herokuapp.com/api/customers",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: customer.firstname,
        lastname: customer.lastname,
        email: customer.email,
        phone: customer.phone,
        streetaddress: customer.streetaddress,
        postcode: customer.postcode,
        city: customer.city,
      }),
    }
  );
  const data = await response.json();

  return { ...data, id: getIdByRel(data?.links, "self") };
}

export async function deleteCustomer(customer: Customer) {
  await fetch(
    `https://customerrest.herokuapp.com/api/customers/${customer.id}`,
    {
      method: "DELETE",
    }
  );
}

export async function deleteTraining(training: Training) {
  await fetch(
    `https://customerrest.herokuapp.com/api/trainings/${training.id}`,
    {
      method: "DELETE",
    }
  );
}
