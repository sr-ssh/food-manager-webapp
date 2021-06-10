import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//actions
import { financeActions } from "../../actions";

//components
import {Bill} from "./bill";
import {AddBill} from './addBill'


const Bills = () => {

    let bills = useSelector(state => state.bill.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(financeActions.getBills())
    }, [dispatch])

    return(
        <>
        <AddBill />
        {
            bills
            ? bills.map((bill, index) => <><hr/><Bill key={index} bill={bill} /></>)
            : <p>هیچ هزینه جاری وجود ندارد</p>
        }
        </>
    )
}

export default Bills;