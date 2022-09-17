import { ObjectType, Field } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "../user";

@ObjectType()
@Entity()
export class AuthToken {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  token: string;

  @Field()
  @CreateDateColumn()
  created: Date;

  @ManyToOne(() => User, (user) => user.tokens)
  user: User;
}
