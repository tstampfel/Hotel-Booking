import { gql } from "@apollo/client";

export const GET_AVAILABLE_ROOMS = gql`
  query GetAvailbleRooms($checkIn: DateTime!, $checkOut: DateTime!) {
    getAvailbleRooms(
      roomSearchInput: { checkIn: $checkIn, checkOut: $checkOut }
    ) {
      id
      size
      bathTub
      bedType {
        type
      }
      roomType {
        type
      }
    }
  }
`;
