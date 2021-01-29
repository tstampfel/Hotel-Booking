// @flow
import React, { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Calendar } from "primereact/calendar";
import { addDays } from "date-fns";
import { useTranslation } from "react-i18next";
import { GET_AVAILABLE_ROOMS } from "../../../graphql/queries";
import { SET_ROOMS } from "../../../store/rooms/roomsActionTypes";
import { useDispatch } from "react-redux";
import { Query } from "../../../graphql/utils/graphql-utils";
import { useApolloClient } from "@apollo/client";
import { useHistory } from "react-router-dom";

type Props = {};
export function SearchForm(props: Props) {
  const currentDay = new Date();
  const { t } = useTranslation();
  const client = useApolloClient();
  const history = useHistory();

  const [dates, setDates] = useState([currentDay, addDays(currentDay, 1)]);
  const dispatch = useDispatch();

  const onSubmit = async (event: any) => {
    let result: any = "";
    event.preventDefault();

    result = await Query(
      client,
      {
        checkIn: dates[0],
        checkOut: dates[1],
      },
      GET_AVAILABLE_ROOMS
    );

    if (result.data.getAvailbleRooms?.length > 0) {
      history.push("/booking");
    }
    dispatch({ type: SET_ROOMS, rooms: result.data.getAvailbleRooms });
  };

  return (
    <div className="search-from">
      <Container>
        <Form onSubmit={onSubmit} data-testid="search-dates-form-submit">
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
                  id="search-form-submit-button"
                  type="submit"
                  title="Search"
                  disabled={dates[1] === null}
                >
                  {t("common:Search")}
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
