import React, { useEffect, useState } from "react";
import { Header } from "../base/header2";

import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "../../../actions";


export const Pricing = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ enter: 0, distance: 0, lowest: 0, duration: 0 })

  const getConfigPrice = useSelector(state => state?.getConfigPrice?.data?.data);
  console.log(getConfigPrice);
  useEffect(() => dispatch(homeActions.getConfigPrice()), [dispatch])

  return (
    <div className="pricing__edit">
      <Header title="قیمت دهی" backLink="/dashboard" />
      <div className="pricing__edit-container-input">
        <p className="pricing__edit-title">ورودی (تومان)</p>
        <input type="text" name="enter" value={getConfigPrice?.enter || input.enter} className="input input__pricing__edit" />
      </div>
      <div className="pricing__edit-container-input">
        <p className="pricing__edit-title">فاصله (متر)</p>
        <input type="text" name="distance" value={getConfigPrice?.distance || input.distance} className="input input__pricing__edit" />
      </div>
      <div className="pricing__edit-container-input">
        <p className="pricing__edit-title">حداقل قیمت (تومان)</p>
        <input type="text" name="lowest" value={getConfigPrice?.lowest || input.lowest} className="input input__pricing__edit" />
      </div>
      <div className="pricing__edit-container-input">
        <p className="pricing__edit-title">زمان مسیر (تومان)</p>
        <input type="text" name="duration" value={getConfigPrice?.duration || input.duration} className="input input__pricing__edit" />
      </div>
      <a className="btnn btnn__pricing__edit">ثبت کردن</a>

    </div>
  );
};
