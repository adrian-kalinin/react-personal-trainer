import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Panel from "./Panel";
import { Customer } from "../utils/types";
import { fetchAllCustomers } from "../utils/api";
import { customerColumns } from "../utils/columns";

function Customers(): JSX.Element {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>();

  useEffect(() => {
    fetchAllCustomers().then((data) => setCustomers(data));
  }, []);

  return (
    <>
      <Box sx={{ height: 600, mt: 3 }}>
        <DataGrid
          columns={customerColumns}
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
