import { GET_AVAILABLE_ROOMS } from "../../graphql/queries";

const selectedDates = [
  new Date(
    "Fri Jan 29 2021 00:00:00 GMT+0100 (Central European Standard Time)"
  ),
  new Date(
    "Sat Jan 30 2021 00:00:00 GMT+0100 (Central European Standard Time)"
  ),
];
export const mocks = [
  {
    request: {
      query: GET_AVAILABLE_ROOMS,
      variables: {
        checkIn: selectedDates[0],
        checkOut: selectedDates[1],
      },
    },
    result: {
      data: {
        getAvailbleRooms: [
          {
            id: "138fca24-ebbb-444a-9261-9e7f6301c7cb",
            size: 75,
            bathTub: true,
            bedType: { type: 4 },
            roomType: { type: 2 },
          },
        ],
      },
    },
  },
];
