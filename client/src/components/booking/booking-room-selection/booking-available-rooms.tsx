// @flow
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { IRoom } from "../../../interfaces/interfaces";
import { getAvailableRooms } from "../../../store/rooms/roomsSelectors";
import { ImageCard } from "../../common/image-card";
import LuxuryRoom from "../../../assets/luxury-room.jpg";
import DoubleRoom from "../../../assets/double-room.jpg";
import SingleRoom from "../../../assets/single-room.jpg";
import { RoomTypeEnum } from "../../../enums/enums";
type Props = {};
export function BookingAvailableRooms(props: Props) {
  const availableRooms = useSelector(getAvailableRooms);
  const roomsImages = [LuxuryRoom, DoubleRoom, SingleRoom];
  return (
    <div className="booking-available-rooms">
      <Container>
        <Row>
          <Col xs={12} className="booking-room-selection-title-col">
            <div className="booking-room-selection-title">Available Rooms</div>
          </Col>
          {availableRooms.map((room: IRoom, index: number) => {
            return (
              <Col xs={12} md={6} className="booking-image-col">
                <ImageCard
                  imageSrc={
                    roomsImages[Math.floor(Math.random() * Math.floor(3))]
                  }
                  title={RoomTypeEnum[room.roomType.type]}
                  callBack={() => {}}
                  description="Lorem ipsum dolor sit amet, conser adipisic elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
