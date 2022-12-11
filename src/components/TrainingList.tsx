import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
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

function TrainingList(): JSX.Element {
  const [trainings, setTrainings] = useState<Training[]>([]);

  useEffect(() => {
    fetchTrainings().then((data) => setTrainings(data));
  }, []);

  return (
    <Box sx={{ height: 600, mt: 3 }}>
      <DataGrid
        columns={columns}
        rows={trainings}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}

export default TrainingList;
