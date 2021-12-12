import React, { useEffect, useState } from "react";
import { Header } from "../base/header2";

import { useDispatch, useSelector } from "react-redux";


export const Station = () => {
    const dispatch = useDispatch();



    return (
        <div className="stations">
            <Header title="ایستگاه ها" backLink="/dashboard" />


        </div>
    );
};
