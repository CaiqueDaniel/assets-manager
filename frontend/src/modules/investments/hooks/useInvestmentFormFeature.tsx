import { GridColDef } from "@mui/x-data-grid";
import { InvestmentDto } from "../types/InvestmentDto";

export function useInvestmentFormFeature() {
  return { columns };
}

const columns: GridColDef<InvestmentDto>[] = [
  { field: "code", headerName: "Código", flex: 1},
  { field: "operation", headerName: "Operação", flex: 1 },
  { field: "date", headerName: "Data", flex: 1 },
  { field: "unitValue", headerName: "Preço unitário", flex: 1 },
  { field: "currency", headerName: "Moeda", flex: 1 },
  { field: "quantity", headerName: "Quantidade", flex: 1 },
];
