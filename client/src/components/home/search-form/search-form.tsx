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

type Props = {};
export function SearchForm(props: Props) {
  const currentDay = new Date();
  const { t } = useTranslation();
  const client = useApolloClient();

  const [dates, setDates] = useState([currentDay, addDays(currentDay, 1)]);
  const dispatch = useDispatch();

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const result = await Query(client, GET_AVAILABLE_ROOMS(dates));
    dispatch({ type: SET_ROOMS, rooms: result.data.getAvailbleRooms });
  };

  return (
    <div className="search-from">
      <Container>
        <Form onSubmit={onSubmit}>
          <>
            <Form.Row>
              <Col md={{ offset: 1 }} lg={{ offset: 1 }}></Col>
              <Form.Group as={Col} xs={12} md={5} lg={5}>
                <Form.Label className="search-form-submit-lable-filler">
                  T
                </Form.Label>
                <Calendar
                  id="range"
                  value={dates}
                  onChange={(e: any) => setDates(e.value)}
                  selectionMode="range"
                  minDate={new Date()}
                  readOnlyInput
                  onSelect={(e) => console.log(e.originalEvent.target)}
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
