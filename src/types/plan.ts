export interface Plan {
  Id: number;
  Name: string;
  MonthlyPrice: number;
  Features: string; // JSON string of features array
  CreatedAt: string;
  UpdatedAt: string;
}

export interface PlanResponseType {
  Success: boolean;
  Message: string;
  Data: Plan[];
}
