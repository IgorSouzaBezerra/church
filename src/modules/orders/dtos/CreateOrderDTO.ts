import { Product } from "../../products/infra/typeorm/entities/Product";

export interface ICreateOrderDTO {
  note: string;
  requester_id: string;
  products: Product[];
}
