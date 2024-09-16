import { Investment } from "./Investment";

export interface InvestmentFactory<T> {
  create(props: T): Investment;
}
