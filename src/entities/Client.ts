import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Transaction } from "./Transaction";
import { Person } from "./utils/Person";

@Entity("client")
export class Client extends Person {
  @Column({ type: "numeric" })
  balance: number;

  @Column({ default: true, name: "active" })
  is_active: boolean;

  @Column({ type: "simple-json", nullable: true })
  additional_info: {
    age: number;
    haircolor: string;
  };

  @Column({ type: "simple-array", default: [] })
  family_members: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Transaction, (trasnaction) => trasnaction.client)
  transactions: Transaction[];
}
