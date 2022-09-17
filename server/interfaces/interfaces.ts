import { BedTypeEnum, RoomTypeEnum } from "../enums/enums";

export interface IRoom {
  id: string;
  size: number;
  tv: boolean;
  bathTub: boolean;
  created: any;
  updated: boolean;
  roomType: IRoomType;
  bedType: IBedType;
  reservations: {};
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  adress: string;
}
export interface IRoomType {
  id: string;
  type: RoomTypeEnum;
}

export interface IBedType {
  id: string;
  type: BedTypeEnum;
  rooms: {};
}
