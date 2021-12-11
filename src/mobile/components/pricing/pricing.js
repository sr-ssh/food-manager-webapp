import React, { useEffect, useState } from "react";
import { Header } from "../base/header2";

import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "../../../actions";


export const Pricing = () => {
  const dispatch = useDispatch();
  const getConfigPrice = useSelector(state => state?.getConfigPrice?.data?.data);
  const [input, setInput] = useState()

  useEffect(() => dispatch(homeActions.getConfigPrice()), [dispatch])

  useEffect(() => setInput(state => ({ ...state, ...getConfigPrice })), [getConfigPrice])

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setInput(input => ({ ...input, [name]: value }));

  }

  const handleSumbit = (e) => {
    e.preventDefault()
    dispatch(homeActions.editConfigPrice(input))
  }

  return (
    <div className="pricing__edit">
      <Header title="قیمت دهی" backLink="/dashboard" />
      <div className="pricing__edit-container-input">
        <p className="pricing__edit-title">ورودی (تومان)</p>
        <input type="text" name="enter" value={input?.enter} onChange={(e) => handleChange(e)} className="input input__pricing__edit" />
      </div>
      <div className="pricing__edit-container-input">
        <p className="pricing__edit-title">فاصله (متر)</p>
        <input type="text" name="distance" value={input?.distance} onChange={(e) => handleChange(e)} className="input input__pricing__edit" />
      </div>
      <div className="pricing__edit-container-input">
        <p className="pricing__edit-title">حداقل قیمت (تومان)</p>
        <input type="text" name="lowest" value={input?.lowest} onChange={(e) => handleChange(e)} className="input input__pricing__edit" />
      </div>
      <div className="pricing__edit-container-input">
        <p className="pricing__edit-title">زمان مسیر (دقیقه)</p>
        <input type="text" name="duration" value={input?.duration} onChange={(e) => handleChange(e)} className="input input__pricing__edit" />
      </div>
      <a className="btnn btnn__pricing__edit" onClick={(e) => handleSumbit(e)}>ثبت کردن</a>

    </div>
  );
};
