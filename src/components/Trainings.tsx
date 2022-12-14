import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Panel from "./Panel";
import { Training } from "../utils/types";
import { fetchTrainings } from "../utils/api";

const columns: GridColDef[] = [
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

function Trainings(): JSX.Element {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [selectedTraining, setSelectedTraining] = useState<Training>();

  useEffect(() => {
    fetchTrainings().then((data) => setTrainings(data));
  }, []);

  return (
    <>
      <Box sx={{ height: 600, mt: 3 }}>
        <DataGrid
          columns={columns}
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
