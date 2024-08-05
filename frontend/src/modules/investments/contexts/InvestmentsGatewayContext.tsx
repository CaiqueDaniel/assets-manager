import { createContext, useContext } from "react";
import { InvestmentsGateway } from "../gateways/InvestmentsGateway";

export const InvestmentsGatewayContext = createContext<
  InvestmentsGateway | undefined
>(undefined);

export function useInvestmentsGatewayContext() {
  const context = useContext(InvestmentsGatewayContext);
  if (!context) throw new Error("InvestmentsGatewayContext was not provided");
  return context;
}
