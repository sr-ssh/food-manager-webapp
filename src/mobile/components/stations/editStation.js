import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stationActions } from "../../../actions";
import { Form, Button, Row, Col, Modal, Spinner, Alert } from "react-bootstrap";
import persianJs from "persianjs/persian.min";
import downloadIcon from "./../../assets/images/station/download.svg";

// icons
import closeIcon from "../../assets/images/close.svg";
export const EditStation = (props) => {
  const [product, setProduct] = useState(
    useSelector((state) => state.getStation.station)
  );
  const addProductLoading = useSelector((state) => state.addProduct.loading);
  const { loading, station } = useSelector((state) => state.getStation);

  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  let handleChange = (e) => {
    if (e.target.id === "price" && e.target.value.length)
      e.target.value = persianJs(e.target.value).toEnglishNumber().toString();
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  let handleClose = () => {
    props.onHide(false);
    setProduct({})
    setTimeout(() => {
      dispatch(stationActions.getStations());
    }, 1500);
  };

  let formHandler = (e) => {
    e.preventDefault();
    dispatch(stationActions.editStation(product));
  };

  let handleStation = (e) => {
    e.preventDefault();
    dispatch(stationActions.getStation({ code: product.code }));
  };

  useEffect(() => {
    station &&
      setProduct({
        ...product,
        ...station,
        latitude: station.location[1],
        longitudes: station.location[0],
      });
  }, [station]);

  console.log(product);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="mx-3 order-serach-modal"
    >
      <Modal.Body className="add-product px-3 add-discount fs-6">
        <Button
          className="border-0 customer-modal-close"
          type="button"
          onClick={(e) => handleClose()}
        >
          <img
            className="d-flex m-auto customer-modal-close-svg"
            src={closeIcon}
            alt="close-btn"
          />
        </Button>
        {alert.message && (
          <>
            <div className="modal-backdrop show"></div>
            <Row className="justify-content-center text-center ">
              <Alert variant={alert.type}>{alert.message}</Alert>
            </Row>
          </>
        )}
        <Form onSubmit={formHandler}>
          <Row className="my-3 justify-content-between">
            <Col xs={12} className="order-filter-input ps-0 mx-0">
              <Form.Group controlId="description">
                <Form.Label className="pe-2 fw-normal fs-6-sm">
                  نام ایستگاه
                </Form.Label>
                <Form.Control
                  style={{ width: "73%" }}
                  className="radius-10 border-0 h-100 py-2 input-box-shadow fs-6-sm"
                  type="text"
                  name="description"
                  value={product?.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3 justify-content-between">
            <Col xs={6} className="order-filter-input ps-0 mx-0" >
              <Form.Group controlId="code" >
                <Form.Label className="pe-2 fw-normal fs-6-sm">
                  شماره ایستگاه
                </Form.Label>

                <Form.Control
                  style={{ width: "72%" }}
                  className="radius-10 border-0 py-2 h-100 input-box-shadow fs-6-sm d-inline-block
                  "
                  type="number"
                  min="0"
                  value={product?.code}
                  onChange={handleChange}
                  required
                />
                {loading ? (
                  <Spinner
                    as="div"
                    variant="primary"
                    animation="border"
                    size="sm"
                    className="add-order-download-btn-loading"
                  />
                ) : (
                  <img
                    style={{ width: "27%" }}
                    src={downloadIcon}
                    className="add-order-download-btn p-1 download-station"
                    onClick={(e) => handleStation(e)}
                    height="33vh"
                    width="50vw"
                    alt="down-icon"
                  />
                )}
              </Form.Group>
            </Col>
            <Col xs={6} className="order-filter-input px-0 mx-0">
              <Form.Group controlId="dimeter" className="ms-2">
                <Form.Label className="pe-3 fw-normal fs-6-sm">شعاع</Form.Label>
                <span className="dimeter-placeholder">متر</span>
                <Form.Control
                  style={{ width: "94%" }}
                  className="radius-10 border-0 py-2 h-100 input-box-shadow fs-6-sm"
                  type="number"
                  min="0"
                  value={product?.dimeter}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-3 justify-content-between">
            <Col xs={6} className="order-filter-input ps-0 mx-0">
              <Form.Group controlId="latitude" className="ms-2">
                <Form.Label className="pe-3 fw-normal fs-6-sm">lat</Form.Label>
                <Form.Control
                  style={{ width: "94%" }}
                  className="radius-10 border-0 py-2 h-100 input-box-shadow fs-6-sm"
                  type="text"
                  value={product?.latitude}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={6} className="order-filter-input px-0 mx-0">
              <Form.Group controlId="longitudes">
                <Form.Label className="pe-3 fw-normal fs-6-sm">long</Form.Label>
                <Form.Control
                  style={{ width: "94%" }}
                  className="radius-10 border-0 py-2 h-100 input-box-shadow fs-6-sm"
                  type="text"
                  value={product?.longitudes}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              {addProductLoading ? (
                <Button
                  className="fw-bold product-submit border-0 w-100 mt-4"
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
                  className="product-submit border-0 w-100 mt-4 fs-6 py-2"
                  size="lg"
                  type="submit"
                  block
                >
                  ثبت
                </Button>
              )}
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
