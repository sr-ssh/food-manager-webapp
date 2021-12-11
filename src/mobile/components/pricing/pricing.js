import React, { useEffect, useState } from "react";
import { Header } from "../base/header2";
import {
  Container,
  Card,
  Row,
  Alert,
  Spinner,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../../actions";
import moment from "jalali-moment";
import commaNumber from "comma-number";

import persianJs from "persianjs/persian.min";

import editIcon from "../../assets/images/Products/edit.svg";

export const Pricing = () => {
  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const products = useSelector((state) => state.getProducts.product);
  const productLoading = useSelector((state) => state.getProducts.loading);
  const addProductLoading = useSelector((state) => state.addProduct.loading);

  let formHandler = (e) => {
    e.preventDefault();
    dispatch(productActions.addProduct(product));
  };
  let handleChange = (e) => {
    if (e.target.id === "price" && e.target.value.length)
      e.target.value = persianJs(e.target.value).toEnglishNumber().toString();
    setProduct({ ...product, [e.target.id]: e.target.value });
  };
  useEffect(() => {
    if (!editModalShow && !addModalShow) dispatch(productActions.getProducts());
  }, [dispatch, editModalShow, addModalShow]);

  return (
    <div className="product-page">
      <Header title="قیمت دهی" backLink="/dashboard" />
      <Container className="m-auto">
        {productLoading && (
          <Row>
            <Col className="col-3 mt-2 m-auto ">
              <Spinner className="m-auto d-block" animation="border" />
            </Col>
          </Row>
        )}

        <Form onSubmit={formHandler}>
          <Row className="my-4 justify-content-around">
            <Col xs={9} className="radius-10 ps-0 mx-0 my-4 py-1">
              <Form.Group controlId="name">
                <Row>
                  <Col xs={3} className="text-end align-items-center">
                    <Form.Label className="pe-2 fw-normal h-100 fs-3 pt-3">
                      ورودی
                    </Form.Label>
                  </Col>
                  <Col >
                    <Form.Control
                      //   style={{ width: "94%" }}
                      className="radius-10 border-0 h-100 py-4 input-box-shadow"
                      type="text"
                      name="name"
                      value={addProductLoading ? "" : null}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col xs={9} className="radius-10 ps-0 mx-0 my-4 py-1">
              <Form.Group controlId="name">
                <Row>
                  <Col xs={3} className="text-center align-items-center">
                    <Form.Label className="pe-2 fw-normal h-100 fs-3 pt-3">
                      حداقل
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      //   style={{ width: "94%" }}
                      className="radius-10 border-0 h-100 py-4 input-box-shadow"
                      type="text"
                      name="name"
                      value={addProductLoading ? "" : null}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col xs={9} className="radius-10 ps-0 mx-0 my-4 py-1">
              <Form.Group controlId="name">
                <Row>
                  <Col xs={3} className="text-center align-items-center">
                    <Form.Label className="pe-2 fw-normal h-100 fs-3 pt-3">
                      هر متر
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      //   style={{ width: "94%" }}
                      className="radius-10 border-0 h-100 py-4 input-box-shadow"
                      type="text"
                      name="name"
                      value={addProductLoading ? "" : null}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col xs={9} className="radius-10 ps-0 mx-0 my-4 py-1">
              <Form.Group controlId="name">
                <Row>
                  <Col xs={3} className="text-center align-items-center">
                    <Form.Label className="pe-2 fw-normal h-100 fs-3 pt-3">
                      هر دقیقه
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      //   style={{ width: "94%" }}
                      className="radius-10 border-0 h-100 py-4 input-box-shadow border-0"
                      type="text"
                      name="name"
                      value={addProductLoading ? "" : null}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
            </Col>
            <Col xs={7} className="radius-10 ps-0 mx-0 my-4">
            <Row className="mt-4">
              <Col >
                {addProductLoading ? (
                  <Button
                    className="product-submit border-0 w-100 mt-3 fs-2 py-4 fw-bold"
                    size="lg"
                    type="submit"
                    disabled
                  >
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    در حال انجام عملیات...
                  </Button>
                ) : (
                  <Button
                    className="product-submit border-0 w-100 mt-3 fs-2 py-4 fw-bold"
                    size="lg"
                    type="submit"
                    block
                  >
                    ثبت
                  </Button>
                )}
              </Col>
            </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};
