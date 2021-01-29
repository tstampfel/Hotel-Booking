export const typeDefs = `
type Query {
  getAvailbleRooms(roomSearchInput: RoomSearchInput!): [Room!]!
}

input RoomSearchInput {
  checkIn: DateTime!
  checkOut: DateTime!
}

"""
The javascript \`Date\` as string. Type represents date and time as the ISO Date string.
"""
scalar DateTime

type Room {
  id: String!
  size: Float!
  tv: Boolean!
  bathTub: Boolean!
  created: DateTime!
  updated: Boolean!
  roomType: RoomType!
  bedType: BedType!
  reservations: [Reservation!]!
}

type RoomType {
  id: String!
  type: Float!
}

type BedType {
  type: Float!
}

type Reservation {
  id: String!
  created: DateTime!
  updated: Boolean!
  checkIn: DateTime!
  checkOut: DateTime!
  user: User!
  room: Room!
}

type User {
  id: String!
  firstName: String!
  lastName: String!
  email: String!
  created: DateTime!
  updated: Boolean!
  lastLogin: DateTime!
  token: String!
}

type Mutation {
  addRoomType(roomType: Float!): RoomType!
}

type AuthToken {
  id: String!
  token: String!
  created: DateTime!
}
`