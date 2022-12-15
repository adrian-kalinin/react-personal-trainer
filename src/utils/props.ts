import { Customer } from "./types";

export type PanelProps = {
  selected: boolean;
  onDelete: () => void;
  editable: boolean;
  setIsCreateDialogOpen: (value: boolean) => void;
};

export type CustomerCreateProps = {
  isDialogOpen: boolean;
  setIsDialogOpen: (value: boolean) => void;
  customers: Customer[];
  setCustomers: (customers: Customer[]) => void;
};
