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
    <div className="pricing__edit">
      <Header title="قیمت دهی" backLink="/dashboard" />

    </div>
  );
};
