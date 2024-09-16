export class PaginatedResult<I> {
  constructor(
    public readonly items: I[],
    public readonly currentPage: number,
    public readonly lastPage: number
  ) {}
}
