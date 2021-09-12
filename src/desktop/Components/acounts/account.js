import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button, Row, Col, Alert, Spinner, Card } from 'react-bootstrap';
import "react-multi-date-picker/styles/layouts/mobile.css"


//Actions
import { userActions } from '../../../actions/userActions'

//Components
import { EmployerAccount } from './employerAccount'
import { WaitingAccount } from './waitingAccount'
import { EmployeeAccount } from './employeeAccount'
import { NoApplicationAccount } from './noApplicationAccount';


export const Account = () => {

    let user_type = JSON.parse(localStorage.getItem('type'));
    let application_status = JSON.parse(localStorage.getItem('applicationStatus'));
    const userInfo = useSelector(state => state.getUserInfo.user);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.getUserInfo())
    }, [dispatch])

    return (
        <div className="product-page">
            <Container fluid className="m-0 w-100 d-flex justify-content-center flex-wrap emplyees-text-gray ">
                <Card className="m-auto mt-3 productCard border-0 col-5" >
                    <Card.Body className="ps-1 rounded-3">
                        {
                            userInfo && user_type === 1 && <EmployerAccount user={userInfo} />
                        }
                        {
                            userInfo && user_type === 2 && application_status === 2 && <EmployeeAccount user={userInfo} />
                        }
                        {
                            userInfo && user_type === 2 && application_status === 1 && <WaitingAccount user={userInfo} />
                        }
                        {
                            userInfo && user_type === 2 && application_status === 3 && <NoApplicationAccount user={userInfo} />
                        }
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
