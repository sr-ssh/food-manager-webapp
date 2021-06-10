

export const Bill = ({bill}) => {
    return(
        <>
        <p>نام: {bill.name}</p>
        <p>هزینه: {bill.cost}</p>
        <p>تاریخ ثبت: {bill.createdAt}</p>
        </>
    )
}
