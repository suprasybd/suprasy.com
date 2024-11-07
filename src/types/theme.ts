export interface Theme {
  Id: number;
  Name: string;
  Description: string;
  IsPublic: boolean;
  Deleted: boolean;
  Owner: string | null;
  R2FolderName: string;
  Type: string;
  GithubLink?: string;
  IsPremium?: boolean;
  CreatedAt: string;
  UpdatedAt: string;
}

export interface ThemeImage {
  ImageUrl: string;
  Id: number;
  CreatedAt: string;
  UpdatedAt: string;
}

export interface ThemeResponse {
  Success: boolean;
  Pagination: {
    TotalPages: number;
    Page: number;
    TotalItems: number;
    Limit: number;
  };
  Message: string;
  Data: Theme[];
}

export interface ThemeImagesResponse {
  Success: boolean;
  Message: string;
  Data: ThemeImage[];
}
