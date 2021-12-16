import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Alert, Spinner } from "react-bootstrap";

import moment from "jalali-moment";
import persianJs from "persianjs/persian.min";
import { orderActions } from "../../../actions";
import { Header } from "../base/baseHeader";
import { OrderSearch } from "./search";
import { Order } from "./order";
import { Delivery } from "./delivery";
import { CancelOrder } from "./cancelOrder";

export const Orders = () => {
  let alertMessage = useSelector((state) => state.alert.message);
  let alerType = useSelector((state) => state.alert.type);
  const [modalShow, setModalShow] = useState(false);
  const [deliveryShow, setDeliveryShow] = useState(false);
  const [cancelOrderShow, setCancelOrderShow] = useState(false);
  const [activeOrder, setActiveOrder] = useState({});
  const [order, setOrder] = useState("");
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.getOrders.orders);
  let orderLoading = useSelector((state) => state.getOrders.loading);
  let excelData = orders.map((order) => {
    return {
      تاریخ: persianJs(
        moment
          .from(order.createdAt, "YYYY/MM/DD")
          .locale("fa")
          .format("YYYY/MM/DD")
      )
        .englishNumber()
        .toString(),
      ساعت: persianJs(
        moment.from(order.createdAt, "HH:mm").locale("fa").format("HH:mm")
      )
        .englishNumber()
        .toString(),
      "نام مشتری": order.customer.family,
      وضعیت: order.status.name,
      موبایل: persianJs(order.customer.mobile).englishNumber().toString(),
      آدرس: persianJs(order.address).englishNumber().toString(),
    };
  });

  useEffect(() => {
    !cancelOrderShow && dispatch(orderActions.getOrders());
  }, [dispatch, cancelOrderShow]);

  return (
    <div className="product-page orders ">
      <Header
        className="noPrint"
        title="سفارش ها"
        setButton1={true}
        setModalShow1={setModalShow}
        setButton2={true}
        excelData={excelData}
      />
      <Container className="m-auto">
        {alertMessage && (
          <>
            <div className="modal-backdrop show"></div>
            <Row className="justify-content-center text-center ">
              <Alert variant={alerType}>{alertMessage}</Alert>
            </Row>
          </>
        )}
        {orderLoading && (
          <Row>
            <Col className="col-3 mt-2 m-auto ">
              <Spinner className="m-auto d-block" animation="border" />
            </Col>
          </Row>
        )}
        {orders.length === 0 && !orderLoading ? (
          <Row className="justify-content-center align-items-center no-result-filter">
            <Col className="col-8 text-center">هیج نتیجه ای یافت نشد!</Col>
          </Row>
        ) : null}
        {orders.length > 0
          ? orders.map((order, index) => (
              <Order
                key={index}
                order={order}
                deliveryShow={deliveryShow}
                setDeliveryShow={setDeliveryShow}
                cancelOrderShow={cancelOrderShow}
                setCancelOrderShow={setCancelOrderShow}
                setActiveOrder={setActiveOrder}
                setOrder={setOrder}
              />
            ))
          : null}

        <OrderSearch show={modalShow} onHide={() => setModalShow(false)} />
        <Delivery
          show={deliveryShow}
          onHide={() => setDeliveryShow(false)}
          order={order}
        />
        <CancelOrder
          show={cancelOrderShow}
          onHide={() => setCancelOrderShow(false)}
          order={activeOrder}
        />
      </Container>
    </div>
  );
};
