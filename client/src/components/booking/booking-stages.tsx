// @flow
import * as React from "react";
import {
  faFolder,
  faClosedCaptioning,
} from "@fortawesome/free-regular-svg-icons";
import { faUserAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { SET_BOOKING_STAGE } from "./../../store/booking/bookingActionTypes";
import { getBookingStage } from "../../store/booking/bookingSelectors";
import { BookingStage } from "./booking-stage";
import { useEffect } from "react";

type Props = {};
export function BookingStages(props: Props) {
  const dispatch = useDispatch();
  const reduxStage = useSelector(getBookingStage);

  useEffect(() => {
    dispatch({ type: SET_BOOKING_STAGE, stage: "select_room" });
    return () => {};
  }, []);

  return (
    <div className="booking-stages-container">
      <div className="booking-stage-wrapper">
        <BookingStage
          isActive={reduxStage === "select_room"}
          icon={faFolder}
          selectStage={() =>
            dispatch({ type: SET_BOOKING_STAGE, stage: "select_room" })
          }
          text="booking:selectRoom"
        />
        <BookingStage
          isActive={reduxStage === "personal_info"}
          icon={faUserAlt}
          selectStage={() =>
            dispatch({
              type: SET_BOOKING_STAGE,
              stage: "personal_info",
            })
          }
          text="booking:personalInfo"
        />
        <BookingStage
          isActive={reduxStage === "payment_info"}
          icon={faClosedCaptioning}
          selectStage={() =>
            dispatch({ type: SET_BOOKING_STAGE, stage: "payment_info" })
          }
          text="booking:paymentInfo"
        />
        <BookingStage
          isActive={reduxStage === "booking_review"}
          icon={faCheck}
          selectStage={() =>
            dispatch({
              type: SET_BOOKING_STAGE,
              stage: "booking_review",
            })
          }
          text="booking:review"
        />
      </div>
    </div>
  );
}
