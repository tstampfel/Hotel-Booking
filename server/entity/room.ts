import { ObjectType, Field } from "type-graphql";
import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { BedType } from "./bed-type";
import { Reservation } from "./reservation";
import { RoomType } from "./room-type";

@ObjectType()
@Entity()
export class Room {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  size: number;

  @Field()
  @Column()
  tv: boolean;

  @Field()
  @Column()
  bathTub: boolean;

  @Field()
  @CreateDateColumn()
  created: Date;

  @Field()
  @UpdateDateColumn()
  updated: boolean;

  @Field()
  @OneToOne(() => RoomType, {
    cascade: true,
  })
  @JoinColumn()
  roomType: RoomType;

  @Field(() => BedType)
  @ManyToOne(() => BedType, (bedType: BedType) => bedType.type, {
    cascade: true,
  })
  bedType: BedType;

  @Field(() => Reservation)
  @OneToMany(() => Reservation, (reservation) => reservation.room)
  reservations: Reservation[];
}
