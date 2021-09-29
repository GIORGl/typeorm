import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinColumn,
} from "typeorm";
import { Client } from "./Client";
import { Person } from "./utils/Person";

@Entity("banker")
export class Banker extends Person {
  @CreateDateColumn()
  created_at: Date;

  @Column({
    unique: true,
    length: 10,
  })
  empoyee_number: string;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Client)
  clients: Client[];
}
