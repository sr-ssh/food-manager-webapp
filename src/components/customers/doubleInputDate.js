import React from 'react';

export const DoubleInputDate = ({name, label, handleChange}) => {
    return(
        <>
            <label htmlFor="name">{label}: </label><br/>
            <label htmlFor={`${name}-from`}>از: </label>
            <input type="date" name={`${name}-from`} id={`${name}-from`} onChange={handleChange} /><br/>
            <label htmlFor={`${name}-to`}>تا: </label>
            <input type="date" name={`${name}-to`} id={`${name}-to`} onChange={handleChange} /><br/>
        </>
    )
}