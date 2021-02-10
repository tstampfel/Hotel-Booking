import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../../utils/window-utils";
import { motion } from "framer-motion";
import NavBarAnimations from "../../../animations/navbar";

export function NavbarSocialLogin(props: any) {
  const { t } = useTranslation();
  const size = useWindowSize();
  return (
    <Row className="navbar-social-login">
      <Col>
        <motion.a
          href="https://www.facebook.com/"
          variants={NavBarAnimations.socials("#4867AA")}
          whileHover="hover"
        >
          <span className="navbar-social-icons">
            <FontAwesomeIcon icon={faFacebook} />
          </span>
        </motion.a>
        <motion.a
          href="https://twitter.com/"
          variants={NavBarAnimations.socials("#50ABF1")}
          whileHover="hover"
        >
          <span className="navbar-social-icons">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/"
          variants={NavBarAnimations.socials("#0077B5")}
          whileHover="hover"
        >
          <span className="navbar-social-icons">
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
        </motion.a>
        <motion.a
          href="https://www.instagram.com/"
          variants={NavBarAnimations.socials("#C50175")}
          whileHover="hover"
        >
          <span className="navbar-social-icons">
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </motion.a>
        <motion.a
          href="https://www.pinterest.com/"
          variants={NavBarAnimations.socials("#DF0022")}
          whileHover="hover"
        >
          <span className="navbar-social-icons">
            <FontAwesomeIcon icon={faPinterest} />
          </span>
        </motion.a>
      </Col>
      <Col>
        <div className="navbar-login">
          <Link to="/">
            <motion.span
              variants={NavBarAnimations.marineBlueOverPain}
              whileHover="hover"
            >
              <FontAwesomeIcon icon={faUserAlt} />
              {size.width > 900 && (
                <span id="navbar-login-text">
                  {t("navigation:loginSignIn")}
                </span>
              )}
            </motion.span>
          </Link>
        </div>
      </Col>
    </Row>
  );
}
