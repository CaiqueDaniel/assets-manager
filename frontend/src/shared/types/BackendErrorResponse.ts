export type BackendErrorResponse = {
  Type: "FATAL" | "VALIDATION";
  Message: string;
  Errors: Record<string, string[]>;
};
