import { DataGrid } from "@mui/x-data-grid";
import { useInvestmentFormFeature } from "../hooks/useInvestmentFormFeature";

export function InvestmentListFeature() {
  const { columns } = useInvestmentFormFeature();

  return (
    <DataGrid
      sx={{ minHeight: 400 }}
      rows={[]}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[30]}
      checkboxSelection
    />
  );
}
