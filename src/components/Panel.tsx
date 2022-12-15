import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { PanelProps } from "../utils/props";

function Panel(props: PanelProps): JSX.Element {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);

  function openDeleteDialog() {
    setIsDeleteDialogOpen(true);
  }

  function cancelDeleteDialog() {
    setIsDeleteDialogOpen(false);
  }

  function confirmDeleteDialog() {
    props.onDelete();
    setIsDeleteDialogOpen(false);
  }

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: "auto",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {props.selected && props.editable && (
          <Fab color="secondary">
            <EditIcon />
          </Fab>
        )}
        <Fab
          sx={{ mx: 2 }}
          color="primary"
          onClick={() => props.setIsCreateDialogOpen(true)}
        >
          <AddIcon />
        </Fab>
        {props.selected && (
          <Fab color="error" onClick={openDeleteDialog}>
            <DeleteIcon />
          </Fab>
        )}
      </Box>
      <Dialog open={isDeleteDialogOpen} onClose={cancelDeleteDialog}>
        <DialogTitle id="alert-dialog-title">Confirm the action</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to delete the data?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={cancelDeleteDialog}
            color="primary"
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            onClick={confirmDeleteDialog}
            color="error"
            variant="contained"
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Panel;
