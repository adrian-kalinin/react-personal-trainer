import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { CustomerCreateProps } from "../utils/props";
import { Customer } from "../utils/types";
import { createCustomer } from "../utils/api";

const emptyCustomer: Customer = {
  firstname: "",
  lastname: "",
  streetaddress: "",
  postcode: "",
  city: "",
  email: "",
  phone: "",
};

function CustomerCreate(props: CustomerCreateProps) {
  const [newCustomer, setNewCustomer] = useState<Customer>(emptyCustomer);

  function closeDialog() {
    props.setIsDialogOpen(false);
  }

  function saveCustomer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (Object.values(newCustomer).every((value) => !!value)) {
      createCustomer(newCustomer).then((customer) => {
        closeDialog();
        props.setCustomers([...props.customers, customer]);
        setNewCustomer(emptyCustomer);
      });
    }
  }

  return (
    <Dialog open={props.isDialogOpen}>
      <DialogTitle id="alert-dialog-title">Create new customer</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <form onSubmit={saveCustomer}>
            <TextField
              margin="dense"
              label={"First name"}
              value={newCustomer.firstname}
              onChange={(event) =>
                setNewCustomer({
                  ...newCustomer,
                  firstname: event.target.value,
                })
              }
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label={"Last name"}
              value={newCustomer.lastname}
              onChange={(event) =>
                setNewCustomer({
                  ...newCustomer,
                  lastname: event.target.value,
                })
              }
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label={"Street address"}
              value={newCustomer.streetaddress}
              onChange={(event) =>
                setNewCustomer({
                  ...newCustomer,
                  streetaddress: event.target.value,
                })
              }
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label={"Post code"}
              value={newCustomer.postcode}
              onChange={(event) =>
                setNewCustomer({
                  ...newCustomer,
                  postcode: event.target.value,
                })
              }
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label={"City"}
              value={newCustomer.city}
              onChange={(event) =>
                setNewCustomer({
                  ...newCustomer,
                  city: event.target.value,
                })
              }
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label={"Email"}
              value={newCustomer.email}
              onChange={(event) =>
                setNewCustomer({
                  ...newCustomer,
                  email: event.target.value,
                })
              }
              fullWidth
              required
            />
            <TextField
              margin="dense"
              label={"Phone"}
              value={newCustomer.phone}
              onChange={(event) =>
                setNewCustomer({
                  ...newCustomer,
                  phone: event.target.value,
                })
              }
              fullWidth
              required
            />
            <Box sx={{ mt: 2 }}>
              <Button
                onClick={closeDialog}
                color="primary"
                variant="contained"
                sx={{ float: "left" }}
              >
                Cancel
              </Button>
              <Button
                color="success"
                variant="contained"
                type="submit"
                sx={{ float: "right" }}
              >
                Save
              </Button>
            </Box>
          </form>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default CustomerCreate;
