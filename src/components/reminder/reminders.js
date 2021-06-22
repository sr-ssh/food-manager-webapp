import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reminderActions } from '../../actions';

export const Reminders = () => {

    let reminders = useSelector(state => state.getReminders.reminders)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(reminderActions.getReminders());      
    }, [dispatch])

    return(
        <>
        {console.log(reminders)}
        </>
    )
}