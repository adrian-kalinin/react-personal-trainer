import React from "react";
import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { PanelProps } from "../utils/props";

function Panel(props: PanelProps): JSX.Element {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "auto",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {props.selected && (
        <Fab color="secondary">
          <EditIcon />
        </Fab>
      )}
      <Fab sx={{ mx: 2 }} color="primary">
        <AddIcon />
      </Fab>
      {props.selected && (
        <Fab color="error">
          <DeleteIcon />
        </Fab>
      )}
    </Box>
  );
}

export default Panel;
