export interface Gateway<E> {
  save(entity: E): Promise<void>;
  findById(...ids: string[]): Promise<E | undefined>;
}
