import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import teamxLogo from "../../assets/images/base/happy-pizza.svg";
import accountIcon from "../../assets/images/drawer/account.svg";
import exitIcon from "../../assets/images/drawer/exit.svg";

import { userActions } from "../../../actions";
import { useDispatch } from "react-redux";
import { employeeActions } from "../../../actions/employeeActions";

export const SidebarItems = () => {
  let permissions = JSON.parse(localStorage.getItem("permissions"));
  let user_type = JSON.parse(localStorage.getItem("type"));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!permissions) dispatch(employeeActions.getPermissions());
  }, [dispatch, permissions]);

  return (
    <Container fluid className="d-flex flex-column h-100">
      <Row className="my-4">
        <Col>
          <img
            src={teamxLogo}
            height="28px"
            className="m-auto d-block pt-0"
            alt="logo"
          />
        </Col>
      </Row>
      <Row>
        {
          // permissions && permissions.getOrders &&
          <Col
            xs={10}
            sm={10}
            md={10}
            lg={10}
            className="py-3 mx-3 fw-bold sidebarItem--top sidebarItem"
          >
            <Link to="/dashboard">گزارشات فروش</Link>
          </Col>
        }
        {permissions && permissions.getProducts && (
          <Col
            xs={10}
            sm={10}
            md={10}
            lg={10}
            className="py-3 mx-3 fw-bold sidebarItem"
          >
            <Link to="/products">محصولات</Link>
          </Col>
        )}
        {
          // permissions && permissions.getOrders &&
          <Col
            xs={10}
            sm={10}
            md={10}
            lg={10}
            className="py-3 mx-3 fw-bold sidebarItem"
          >
            <Link to="/payment/delivery">پرداخت و شارژ پیک ها</Link>
          </Col>
        }
        {
          permissions && permissions.getPricing &&
          <Col
            xs={10}
            sm={10}
            md={10}
            lg={10}
            className="py-3 mx-3 fw-bold sidebarItem"
          >
            <Link to="/pricing">قیمت دهی</Link>
          </Col>
        }
        {
          // permissions && permissions.finance &&
          <Col
            xs={10}
            sm={10}
            md={10}
            lg={10}
            className="py-3 mx-3 fw-bold sidebarItem"
          >
            <Link to="/dashboard">ایستگاه ها</Link>
          </Col>
        }
        {permissions && permissions.getEmployees && (
          <Col
            xs={10}
            sm={10}
            md={10}
            lg={10}
            className="py-3 mx-3 fw-bold sidebarItem"
          >
            <Link to="/employees">کارمندان</Link>
          </Col>
        )}
      </Row>

      <Row className="d-flex justify-content-center align-items-center mt-auto dashboardIcons">
        <Col className="my-3 col-4">
          <Col onClick={(e) => userActions.logout()}>
            <img
              className="m-auto d-block"
              src={exitIcon}
              height="40px"
              alt="exit-icon"
            />
          </Col>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} className="my-3">
          <Link to="/account">
            <img
              className="m-auto d-block"
              src={accountIcon}
              height="40px"
              alt="acount-icon"
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
