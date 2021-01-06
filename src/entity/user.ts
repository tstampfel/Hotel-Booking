import { ObjectType, Field } from "type-graphql";
import { AuthToken } from "./user-entities/token-entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @OneToMany(() => AuthToken, (authToken: AuthToken) => authToken)
  tokens: AuthToken[];

  @Field()
  @CreateDateColumn()
  created: Date;

  @Field()
  @UpdateDateColumn()
  updated: boolean;

  @Field()
  @Column({ nullable: true })
  lastLogin: Date;

  @Field()
  token: string;

  @Column({ nullable: true })
  password: string;

  @Column({ default: false })
  confirmedEmail: boolean;

  @Column({ nullable: true })
  isConfirmed: boolean;
}
