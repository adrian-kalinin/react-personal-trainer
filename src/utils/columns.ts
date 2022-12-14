import { GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";

export const customerColumns: GridColDef[] = [
  { field: "firstname", headerName: "First Name", flex: 1 },
  { field: "lastname", headerName: "Last Name", flex: 1 },
  { field: "streetaddress", headerName: "Street Address", flex: 1 },
  { field: "postcode", headerName: " Post Code", flex: 1 },
  { field: "city", headerName: "City", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "phone", headerName: "Phone", flex: 1 },
];

export const trainingColumns: GridColDef[] = [
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    valueFormatter: (params) =>
      dayjs(params?.value).format("DD/MM/YYYY hh:mm A"),
  },
  {
    field: "duration",
    headerName: "Duration",
    flex: 1,
    valueFormatter: (params) => `${params?.value} min`,
  },
  { field: "activity", headerName: "Activity", flex: 1 },
  {
    field: "customer",
    headerName: "Customer",
    flex: 1,
    valueFormatter: (params) =>
      `${params?.value.firstname} ${params?.value.lastname}`,
  },
];
