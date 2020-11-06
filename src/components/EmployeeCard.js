import React from 'react'

export default function EmployeeCard(props) {
    // grab values from prop object of employee info
    const { first_name, last_name, email, phone } = props.employeeInfo

    return (
        <div className='employeeCard d-flex justify-content-around'>
            <div class='employeeName employeeCol'>
                {first_name} {last_name}
            </div>
            <div class='employeeEmail employeeCol'>
                {email}
            </div>
            <div class='employeePhone employeeCol'>
                {phone}
            </div>
        </div>
    )
}
