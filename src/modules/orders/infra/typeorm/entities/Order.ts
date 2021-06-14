import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 } from "uuid";

import { Product } from "../../../../products/infra/typeorm/entities/Product";
import { User } from "../../../../users/infra/typeorm/entities/User";

@Entity("orders")
class Order {
  @PrimaryColumn()
  id: string;

  @Column()
  requester_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "requester_id" })
  requester: User;

  @ManyToMany(() => Product)
  @JoinTable({
    name: "products_orders",
    joinColumns: [{ name: "order_id" }],
    inverseJoinColumns: [{ name: "product_id" }],
  })
  products: Product[];

  @Column()
  note: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { Order };
