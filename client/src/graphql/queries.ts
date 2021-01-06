import { gql } from "@apollo/client";
import { format } from "date-fns";

export function GET_AVAILABLE_ROOMS(dates: Date[]) {
  return gql`
  query {
    getAvailbleRooms(
      roomSearchInput: {
        checkIn: "${format(dates[0], "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}"
        checkOut: "${format(dates[1], "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}"
      }
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
}
