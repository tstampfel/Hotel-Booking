// @flow
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import CommonAnimation from "../../animations/common";
import { useHistory } from "react-router-dom";
type Props = {};
export function BookingBannerBreadcrumbs(props: Props) {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <div className="booking-banner-breadcrumbs">
      <motion.span
        variants={CommonAnimation.commonOnHover("#3AC4FA")}
        whileHover="hover"
        id="booking-banner-home"
        onClick={() => history.push("/")}
      >
        {t("common:Home")}
      </motion.span>
      <FontAwesomeIcon icon={faChevronRight} size="xs" />
      <span id="booking-banner-booking"> {t("common:Booking")}</span>
    </div>
  );
}
