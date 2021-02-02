import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_AVAILABLE_ROOMS } from "../../../graphql/queries";
import { Button, Col, Container, Form, Spinner } from "react-bootstrap";
import { Calendar } from "primereact/calendar";
import { addDays } from "date-fns";
import { SET_ROOMS } from "../../../store/rooms/roomsActionTypes";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

type Props = {};
export function SearchForm(props: Props) {
  const currentDay = new Date();
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [dates, setDates] = useState([
    new Date(currentDay),
    addDays(currentDay, 1),
  ]);
  const [loadRooms, { loading, called }] = useLazyQuery(GET_AVAILABLE_ROOMS, {
    variables: {
      checkIn: dates[0],
      checkOut: dates[1],
    },
    onCompleted: (data) => {
      history.push("/booking");
      dispatch({ type: SET_ROOMS, rooms: data.getAvailbleRooms });
    },
  });
  const onSubmit = async (event: any) => {
    event.preventDefault();
    loadRooms();
  };

  return (
    <div className="search-from">
      <Container>
        <Form onSubmit={onSubmit}>
          <>
            <Form.Row>
              <Col md={{ offset: 1 }} lg={{ offset: 1 }}></Col>
              <Form.Group as={Col} xs={12} md={5} lg={5}>
                <Form.Label
                  htmlFor="search-form-calender-range"
                  className="search-form-submit-lable-filler"
                >
                  Search Dates Calender
                </Form.Label>
                <Calendar
                  data-testid="search-form-calender-range-test"
                  id="search-form-calender-range"
                  value={dates}
                  onChange={(e: any) => setDates(e.value)}
                  selectionMode="range"
                  minDate={new Date()}
                  readOnlyInput
                  showIcon
                  placeholder="Pick dates"
                />
              </Form.Group>
              <Form.Group as={Col} xs={12} md={4} lg={4}>
                <Form.Label className="search-form-submit-lable-filler">
                  T
                </Form.Label>
                <Button
                  data-testid="search-dates-form-submit-button"
                  id="search-form-submit-button"
                  type="submit"
                  title="Search"
                  disabled={dates[1] === null || loading || called}
                >
                  {(loading || called) && (
                    <Spinner animation="border" variant="light" size="sm" />
                  )}
                  {!loading && !called && t("common:Search")}
                </Button>
              </Form.Group>
              <Col md={{ offset: 1 }} lg={{ offset: 1 }}></Col>
            </Form.Row>
          </>
        </Form>
      </Container>
    </div>
  );
}
