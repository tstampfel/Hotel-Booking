import { BedTypeEnum } from "../models/enums/enums";
import { ObjectType, Field } from "type-graphql";

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./room";

@Entity()
@ObjectType()
export class BedType {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column("enum", { nullable: false, enum: BedTypeEnum })
  type: BedTypeEnum;

  @OneToMany(() => Room, (room) => room.bedType)
  rooms: Room[];
}
