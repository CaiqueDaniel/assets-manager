import { BackendErrorResponse } from "../types/BackendErrorResponse";
import { FatalGatewayError } from "./FatalGatewayError";
import { ValidationGatewayError } from "./ValidationGatewayError";

export class GatewayErrorFactory {
  static from({ Type: type, Message: message, Errors: errors }: BackendErrorResponse) {
    switch (type) {
      case "VALIDATION":
        return new ValidationGatewayError(message, errors);
      default:
        return new FatalGatewayError();
    }
  }
}
