import React from 'react'
import './style.css'

export default function EmployeeCard(props) {
    // grab values from prop object of employee info
    const { name, email, phone } = props.employeeInfo

    return (
        <div className='employeeCard d-flex justify-content-around'>
            <div class='employeeName employeeCol'>
                {name}
            </div>
            <div class='employeeEmail employeeCol'>
                <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div class='employeePhone employeeCol'>
                <a href={`tel:${phone}`}>{phone}</a>
            </div>
        </div>
    )
}
