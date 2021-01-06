import { RoomService } from "../service/room-service";
import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { RoomType } from "../entity/room-type";
import { RoomTypeEnum } from "../models/enums/enums";
import { RoomSearchInput } from "../models/input-types/room-search-input";
import { Room } from "../entity/room";

@Resolver()
export class RoomTypeResolver {
  constructor(private roomService: RoomService) {}
  @Mutation(() => RoomType)
  async addRoomType(@Arg("roomType") roomType: RoomTypeEnum) {
    return await this.roomService.addRoomType(roomType);
  }
  @Query(() => [Room])
  async getAvailbleRooms(
    @Arg("roomSearchInput") roomSearchInput: RoomSearchInput
  ) {
    return await this.roomService.searchRoom(roomSearchInput);
  }
}
