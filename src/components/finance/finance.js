import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { financeActions } from '../../actions'

// components
import Bills from './bills'

export const Finance = () => {

    let summary = useSelector(state => state.financeSummary.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(financeActions.getFinanceSummary())
    }, [dispatch])

    return(
        <>
        {/* <p>درآمد: {income}</p> */}
        {
            summary 
            ? <><p>درآمد: {summary.income}</p><p>مخارج: {summary.outcome}</p></>
            : null
        }
        <Bills/>
        <p>مجموع هزینه ها: </p>
        </>
    )
}