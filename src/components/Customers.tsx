import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Panel from "./Panel";
import { Customer } from "../utils/types";
import { fetchCustomers } from "../utils/api";

const columns: GridColDef[] = [
  { field: "firstname", headerName: "First Name", flex: 1 },
  { field: "lastname", headerName: "Last Name", flex: 1 },
  { field: "streetaddress", headerName: "Street Address", flex: 1 },
  { field: "postcode", headerName: " Post Code", flex: 1 },
  { field: "city", headerName: "City", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "phone", headerName: "Phone", flex: 1 },
];

function Customers(): JSX.Element {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>();

  useEffect(() => {
    fetchCustomers().then((data) => setCustomers(data));
  }, []);

  return (
    <>
      <Box sx={{ height: 600, mt: 3 }}>
        <DataGrid
          columns={columns}
          rows={customers}
          onSelectionModelChange={(selection) =>
            setSelectedCustomer(
              customers.find((customer) => customer.id === selection[0])
            )
          }
        />
      </Box>
      <Panel selected={!!selectedCustomer} />
    </>
  );
}

export default Customers;
