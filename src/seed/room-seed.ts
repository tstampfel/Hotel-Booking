import { BedTypeEnum, RoomTypeEnum } from "../models/enums/enums";

export const RoomTypeSeed = [
  {
    type: RoomTypeEnum.Luxury,
  },
  {
    type: RoomTypeEnum.Family,
  },
  {
    type: RoomTypeEnum.Double,
  },
  {
    type: RoomTypeEnum.Couple,
  },
  {
    type: RoomTypeEnum.Standard,
  },
  {
    type: RoomTypeEnum.Single,
  },
];

export const BedTypeSeed = [
  {
    type: BedTypeEnum.King,
  },
  {
    type: BedTypeEnum.Queen,
  },
  {
    type: BedTypeEnum.Double,
  },
  {
    type: BedTypeEnum.Single,
  },
  {
    type: BedTypeEnum.Standard,
  },
];

export const RoomSeed = [
  { size: 75, tv: true, bathTub: true },
  { size: 65, tv: true, bathTub: true },
  { size: 55, tv: true, bathTub: true },
  { size: 45, tv: true, bathTub: true },
  { size: 35, tv: true, bathTub: true },
  { size: 25, tv: true, bathTub: true },
];
