import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliveryChargesActions } from "../../../actions";
import { Header } from "../base/header2";
import { Spinner, Col } from "react-bootstrap";
import persianJs from "persianjs/persian.min";

export const DeliveryPayment = () => {
  const { charges, loading } = useSelector((state) => state.getDeliveryCharges);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(deliveryChargesActions.getDeliveryCharges());
  }, [dispatch]);
  return (
    <>
      <Header title="پرداخت و شارژ پیک ها" backLink="/dashboard" />
      {loading && (
        <Col className="col-3 mt-2 m-auto d-block align-self-center w-100 mb-4 ">
          <Spinner className="m-auto d-block" animation="border" />
        </Col>
      )}
      <div className="deliveryPayment">
        {!loading &&
          charges?.length &&
          charges.map((item, index) => (
            <div className="cards cards__deliveryPayment">
              <div className="deliveryPayment__text">
                <span className="deliveryPayment__text-name">نام:</span>
                <span className="deliveryPayment__text-name-value">
                  {item.family}
                </span>
                <span className="deliveryPayment__text-charge ps-3">شارژ:</span>
                <div dir="ltr">
                <span className="deliveryPayment__text-charge-value ps-3">
                  {item.charge &&
                    persianJs(item.charge).englishNumber().toString()}
                </span>               

                </div>
                <span>تومان</span>

              </div>
              <div className="deliveryPayment__text">
                <span className="deliveryPayment__text-mobile">موبایل:</span>
                <span className="deliveryPayment__text-mobile-value">
                  {item.mobile &&
                    persianJs(item.mobile).englishNumber().toString()}
                </span>
              </div>
              <div className="deliveryPayment__text">
                <span className="deliveryPayment__text-iban">شماره شبا:</span>
                <span className="deliveryPayment__text-iban-value">
                  {item.sheba &&
                    persianJs(item.sheba).englishNumber().toString()}
                </span>
              </div>
              <div className="deliveryPayment__text">
                <span className="deliveryPayment__text-bankAccount">
                  شماره حساب:
                </span>
                <span className="deliveryPayment__text-bankAccount-value">
                  {item.accountNumber &&
                    persianJs(item.accountNumber).englishNumber().toString()}
                </span>
              </div>
              <div className="deliveryPayment__text">
                <span className="deliveryPayment__text-creditCardNumber">
                  شماره کارت:
                </span>
                <span className="deliveryPayment__text-creditCardNumber-value">
                  {item.cardNumber &&
                    persianJs(item.cardNumber).englishNumber().toString()}
                </span>
              </div>
              <div className="deliveryPayment__btn">
                <a className="btn btn__deliveryPayment">پرداخت شد</a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
