import React, { useState, useEffect } from "react";
import Sidebar from "react-sidebar";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { SidebarItems } from "./sidebarItems";

import menuIcon from "./../../assets/images/base/menu.svg";
import logo from "../../assets/images/base/happy-pizza.svg";
import { MainMenuOptions } from "./mainMenuOptions";

import { employeeActions } from "../../../actions/employeeActions";
import { userActions } from "../../../actions/userActions";
import { productActions } from "../../../actions/productActions";
import { EmployerNoProduct } from "./employerNoProduct";
import { EmployeeApp } from "./employeeApp";
import { EmployeeNoApp } from "./employeeNoApp";

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  let user_type = JSON.parse(localStorage.getItem("type"));
  let application_status = JSON.parse(
    localStorage.getItem("applicationStatus")
  );
  const permissions = useSelector((state) => state.getPermissions.permissions);
  const userInfo = useSelector((state) => state.getUserInfo.user);
  const products = useSelector((state) => state.getProducts.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUserInfo());
    dispatch(productActions.getProducts());
    if (!permissions) dispatch(employeeActions.getPermissions());
  }, [dispatch, permissions]);

  return (
    <>
      <Sidebar
        sidebar={<SidebarItems />}
        open={isOpen}
        onSetOpen={setIsOpen}
        pullRight={true}
        styles={{
          sidebar: { background: "#ebebeb", width: "42vw", zIndex: "1040" },
          overlay: { zIndex: "1030" },
        }}
        overlayClassName="test3"
        shadow={true}
        touch={false}
      >
        <div className="">
          <div id="back-up"></div>
          <img className="logo" src={logo} alt="logo" height="50px" />
          <img
            onClick={() => setIsOpen(!isOpen)}
            className="menu-logo p-"
            src={menuIcon}
            height="35px"
            alt="menu-icon"
          />
          <div id="back-center" className="back-center-main">
            <Container fluid className="p-0 d-flex flex-column ms-0">
              <Row className="p-0 m-0 mzLogo">
                <Col className=""></Col>
              </Row>
              <Row
                className="ms-0 justify-content-center no-product-main-body"
                style={{ zIndex: 1 }}
              >
                <MainMenuOptions />
              </Row>
            </Container>
          </div>
        </div>
      </Sidebar>
    </>
  );
};
