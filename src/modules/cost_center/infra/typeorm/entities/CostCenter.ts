import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";

@Entity("cost_center")
class CostCenter {
  @PrimaryColumn()
  id: string;

  @Column()
  number: number;

  @Column()
  responsible: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { CostCenter };
