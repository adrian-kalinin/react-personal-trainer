import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Panel from "./Panel";
import { Customer } from "../utils/types";
import { deleteCustomer, fetchAllCustomers } from "../utils/api";
import { customerColumns } from "../utils/columns";

function Customers(): JSX.Element {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>();

  useEffect(() => {
    fetchAllCustomers().then((data) => setCustomers(data));
  }, []);

  function deleteSelectedCustomer() {
    if (selectedCustomer) {
      deleteCustomer(selectedCustomer).then(() => {
        setCustomers(
          customers.filter((customer) => customer !== selectedCustomer)
        );
        setSelectedCustomer(undefined);
      });
    }
  }

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
      <Panel
        selected={!!selectedCustomer}
        onDelete={deleteSelectedCustomer}
        editable
      />
    </>
  );
}

export default Customers;
