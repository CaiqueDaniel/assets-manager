import { GatewayError } from "./GatewayError";

export class FatalGatewayError extends GatewayError {
  constructor() {
    super("Erro interno", {});
  }
}
