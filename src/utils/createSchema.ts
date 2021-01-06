import { buildSchema } from "type-graphql";
import Container from "typedi";
import { authChecker } from "./authChecker";
import { redisPubsub } from "./../redis";

import { RoomTypeResolver } from "../modules/room-type-resolver";

export const createSchema = async () =>
  buildSchema({
    resolvers: [RoomTypeResolver],
    container: Container,
    pubSub: redisPubsub,
    authChecker,
  });
