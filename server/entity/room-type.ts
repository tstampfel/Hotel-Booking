import { RoomTypeEnum } from "../models/enums/enums";
import { ObjectType, Field } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class RoomType {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column("enum", { nullable: false, enum: RoomTypeEnum })
  type: RoomTypeEnum;
}
