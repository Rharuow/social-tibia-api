import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Char } from "./Char";

@Entity("users")
export class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Char, (char) => char.user, {
    onDelete: "CASCADE",
  })
  chars: Char[];

  constructor() {
    if (!this.id) this.id = uuid();
  }
}
