export interface Theme {
  Id: number;
  Name: string;
  Description: string;
  IsPublic: boolean;
  Deleted: boolean;
  Owner: string | null;
  R2FolderName: string;
  GithubLink: string | null;
  Type: 'free' | 'paid';
  CreatedAt: string;
  UpdatedAt: string;
}

export interface ThemeImage {
  Id: number;
  ThemeId: number;
  ImageUrl: string;
  CreatedAt: string;
  UpdatedAt: string;
}

export interface PaginationInfo {
  TotalPages: number;
  Page: number;
  TotalItems: number;
  Limit: number;
}

export interface ApiResponse<T> {
  Success: boolean;
  Message: string;
  Data: T;
  Pagination: PaginationInfo;
}
