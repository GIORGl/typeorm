import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("person")
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fistname: string;

  @Column()
  lastname: string;

  @Column()
  middlename: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true, length: 10 })
  card_number: string;
}
