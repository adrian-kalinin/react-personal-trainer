import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Panel from "./Panel";
import { Training } from "../utils/types";
import { fetchAllTrainings } from "../utils/api";
import { trainingColumns } from "../utils/columns";

function Trainings(): JSX.Element {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [selectedTraining, setSelectedTraining] = useState<Training>();

  useEffect(() => {
    fetchAllTrainings().then((data) => setTrainings(data));
  }, []);

  return (
    <>
      <Box sx={{ height: 600, mt: 3 }}>
        <DataGrid
          columns={trainingColumns}
          rows={trainings}
          onSelectionModelChange={(selection) =>
            setSelectedTraining(
              trainings.find((training) => training.id === selection[0])
            )
          }
        />
      </Box>
      <Panel selected={!!selectedTraining} />
    </>
  );
}

export default Trainings;
