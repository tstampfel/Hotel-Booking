import { RoomTypeEnum } from "../models/enums/enums";
import { Service } from "typedi";
import { createQueryBuilder, getRepository } from "typeorm";
import { RoomType } from "../entity/room-type";
import { RoomSearchInput } from "../models/input-types/room-search-input";
import { Room } from "../entity/room";
//import { Room } from "../entity/room";

@Service()
export class RoomService {
  async addRoomType(roomType: RoomTypeEnum) {
    const roomTypeRepository = getRepository(RoomType);
    var newRoomType = new RoomType();
    newRoomType.type = roomType;
    await roomTypeRepository.save(newRoomType);
    return newRoomType;
  }

  async searchRoom(roomSearchInput: RoomSearchInput) {
    const availableRooms = await createQueryBuilder(Room, "room")
      .leftJoinAndSelect(
        "room.reservations",
        "reservation",
        "reservation.roomId = room.id AND reservation.checkIn <= :checkOut AND reservation.checkIn >= :checkIn",
        { checkIn: roomSearchInput.checkIn, checkOut: roomSearchInput.checkOut }
      )
      .leftJoinAndSelect("room.bedType", "bed_type")
      .leftJoinAndSelect("room.roomType", "room_type")
      .where("reservation.id IS NULL")
      .getMany();

    return availableRooms;
  }
}
