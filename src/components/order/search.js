import React, { useState } from 'react';
import { orderActions } from '../../actions';

export const OrderSearch = () => {

    const [inputs, setInputs] = useState({})
    const dispatch = useDispatch()


    const formHandeler = (e) => {
        e.preventDefault();
        dispatch(orderActions.setFilter(inputs))
    }


    return(
        <>
        </>
    );
}