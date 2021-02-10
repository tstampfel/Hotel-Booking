import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import NavBarAnimations from "../../../animations/navbar";
function NavbarLowerLinks(props: any) {
  const { t } = useTranslation();

  const [activeLink, setActiveLink] = useState("home");

  return (
    <>
      <div className="navbar-lower">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <NavLink href="#home" to="/">
              <strong>ALPHA</strong>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <motion.div
                className="navbar-link"
                variants={NavBarAnimations.linkVariant}
                whileHover="visible"
                initial="hidden"
                animate={activeLink === "home" ? "visible" : ""}
              >
                <Nav.Link
                  onClick={() => {
                    setActiveLink("home");
                  }}
                  exact
                  to="/"
                  as={NavLink}
                >
                  {t("common:Home")}
                </Nav.Link>
              </motion.div>
              <motion.div
                initial="hidden"
                className="navbar-link"
                variants={NavBarAnimations.linkVariant}
                whileHover="visible"
                animate={activeLink === "about" ? "visible" : ""}
              >
                <Nav.Link
                  onClick={() => {
                    setActiveLink("about");
                  }}
                  exact
                  to="/about"
                  as={NavLink}
                >
                  {t("common:About")}
                </Nav.Link>
              </motion.div>
              <motion.div
                initial="hidden"
                className="navbar-link"
                variants={NavBarAnimations.linkVariant}
                whileHover="visible"
                animate={activeLink === "rooms" ? "visible" : ""}
              >
                <Nav.Link
                  onClick={() => {
                    setActiveLink("rooms");
                  }}
                  exact
                  to="/rooms"
                  as={NavLink}
                >
                  {t("common:Rooms")}
                </Nav.Link>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarLowerLinks;
