import { PropsWithChildren } from "react";
import { InvestmentsGatewayContext } from "../contexts/InvestmentsGatewayContext";
import { DefaultInvestmentsGateway } from "../gateways/DefaultInvestmentsGateway";

export function InvestmentsGatewayProvider({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <InvestmentsGatewayContext.Provider value={new DefaultInvestmentsGateway()}>
      {children}
    </InvestmentsGatewayContext.Provider>
  );
}
