import { ObjectType, Field } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Room } from "./room";
import { User } from "./user";

@ObjectType()
@Entity()
export class Reservation {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @CreateDateColumn()
  created: Date;

  @Field()
  @UpdateDateColumn()
  updated: boolean;

  @Field()
  @Column()
  checkIn: Date;

  @Field()
  @Column()
  checkOut: Date;

  @Field()
  @OneToOne(() => User, {
    cascade: true,
    nullable: false,
  })
  @JoinColumn()
  user: User;

  @Field(() => Room)
  @ManyToOne(() => Room, (room) => room.reservations)
  room: Room;
}
