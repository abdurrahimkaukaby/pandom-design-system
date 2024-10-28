export interface PaginationResultDTO<T> {
    forEach(arg0: (v: any) => void): unknown;
    currentPage: number;
    totalItems: number;
    lastPage: number;
    totalItemsPerPage: number;
    hasNext: boolean;
    hasPrev: boolean;
    list: T[];
  }

export interface SearchPaginationDTO {
    page?: number;
    perPage?: number;
    searchTerm?: string;
    showByParent?: boolean;
    parentId?: number;
    category?: string;
}