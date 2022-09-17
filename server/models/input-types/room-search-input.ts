import { Field, InputType } from "type-graphql";
import { Reservation } from "src/entity/reservation";

@InputType()
export class RoomSearchInput implements Partial<Reservation> {
  @Field()
  checkIn: Date;

  @Field()
  checkOut: Date;
}
