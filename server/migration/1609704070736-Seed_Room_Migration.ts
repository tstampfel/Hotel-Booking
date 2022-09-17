import { BedTypeSeed, RoomSeed, RoomTypeSeed } from "../seed/room-seed";
import { getRepository, MigrationInterface } from "typeorm";
import { RoomType } from "../entity/room-type";
import { Room } from "../entity/room";
import { BedType } from "../entity/bed-type";

export class SeedRoomMigration1609704070736 implements MigrationInterface {
  public async up(): Promise<void> {
    for (let i = 0; i < RoomTypeSeed.length; i++) {
      let roomTypes = await getRepository(RoomType).save(RoomTypeSeed[i]);
      let room: any = RoomSeed[i];
      room.roomType = roomTypes;
      let roomSaved = await getRepository(Room).save(room);
      let bedType: any = BedTypeSeed[i];
      if (!bedType) {
        bedType = BedTypeSeed[3];
      }

      bedType.rooms = [roomSaved];
      await getRepository(BedType).save(bedType);
    }
  }

  public async down(): Promise<void> {}
}
