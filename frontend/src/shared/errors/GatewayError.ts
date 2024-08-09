export abstract class GatewayError extends Error {
  constructor(
    message: string,
    private readonly _errors: Record<string, string[]>
  ) {
    super(message);
  }

  getErrorsFor(field: string): string[] | undefined {
    return this._errors[field] ?? undefined;
  }
}
