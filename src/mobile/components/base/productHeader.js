import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import backIcon from "./../../assets/images/back.svg";
import plusIcon from "./../../assets/images/Products/pluss.svg";
import editIcon from "./../../assets/images/Products/edit.svg";

export const Header = ({ title, modalShow, setModalShow, setEdit = false, setEditModal = {} }) => {
  return (
    <>
      <Navbar variant="dark" sticky="top" className="py-1 my-nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-center w-100">
            <Nav.Link
              className="ms-0 pe-4 ps-1 me-3"
              onClick={() => setModalShow(true)}
            >
              <img src={plusIcon} height="38px" alt="plus-icon" />
            </Nav.Link>
            {setEdit && (
              <Nav.Link
                className="ms-4 pe-4 ps-4"
                onClick={() => setEditModal(true)}
              >
                <img src={editIcon} height="38px" alt="plus-icon" />
              </Nav.Link>
            )}
            <Navbar.Text className="fs-6 text-light me-4 pe-1">{title}</Navbar.Text>
            <Nav.Link href="/dashboard" className="me-auto ps-4">
              <img src={backIcon} height="26px" alt="back-icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
