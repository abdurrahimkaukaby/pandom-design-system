
export interface HttpResult<T> {
  message: string;
  data: T;
  headers: {
    status: string;
  };
  errorsDetails? : errorsDetailDTO[]
}

export interface errorsDetailDTO {
  object : string;
  field : string;
  rejectedValue : string;
  message : string;
}


