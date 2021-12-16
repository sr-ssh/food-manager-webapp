import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customerActions } from "../../../actions/customerActions";
import { Container, Spinner, Col } from "react-bootstrap";
import { Header } from "../base/baseHeader";
import { Row, Alert } from "react-bootstrap";
import moment from "jalali-moment";
import persianJs from "persianjs/persian.min";

// components
import { Customer } from "./customer";
import { CustomerSearch } from "./search";

export const Customers = () => {
  let alertMessage = useSelector((state) => state.alert.message);
  let alerType = useSelector((state) => state.alert.type);
  const [modalShow, setModalShow] = useState(false);
  let customers = useSelector((state) => state.getCustomers.customers);
  let customerLoading = useSelector((state) => state.getCustomers.loading);
  let excelData = customers.map((customer) => {
    return {
      نام: customer.family,
      "تاریخ عضویت": persianJs(
        moment
          .from(customer.createdAt, "YYYY/MM/DD")
          .locale("fa")
          .format("DD/MMMM/YYYY")
      )
        .englishNumber()
        .toString(),
      موبایل: persianJs(customer.mobile).englishNumber().toString(),
      "تعداد سفارش": persianJs(customer.order || '0').englishNumber().toString(),
      "آخرین خرید": customer.lastBuy ? persianJs(
        moment
          .from(customer.lastBuy, "YYYY/MM/DD")
          .locale("fa")
          .format("DD/MMMM/YYYY")
      )
        .englishNumber()
        .toString() : "",
      "جمع خرید": persianJs(customer.total || '0').englishNumber().toString(),
    };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(customerActions.getCustomers());
  }, [dispatch]);

  return (
    <>
      <div className="product-page orders">
        <Header
          title="مشتریان"
          setButton1={true}
          setModalShow1={setModalShow}
          setButton2={true}
          excelData={excelData}
        />
        <Container fluid className="m-auto">
          {customerLoading && (
            <Row>
              <Col className="col-3 mt-2 m-auto ">
                <Spinner className="m-auto d-block" animation="border" />
              </Col>
            </Row>
          )}
          {customers.length === 0 && !customerLoading ? (
            <Row className="justify-content-center align-items-center no-result-filter">
              <Col className="col-8 text-center">هیج نتیجه ای یافت نشد!</Col>
            </Row>
          ) : null}
          {alertMessage && (
            <>
              <div className="modal-backdrop show"></div>
              <Row className="justify-content-center text-center ">
                <Alert variant={alerType}>{alertMessage}</Alert>
              </Row>
            </>
          )}
          {customers
            ? customers.map((customer, index) => (
                <Customer key={index} customer={customer} />
              ))
            : null}
          <CustomerSearch show={modalShow} onHide={() => setModalShow(false)} />
        </Container>
      </div>
    </>
  );
};
