import React from 'react'

export default function SearchBar(props) {
    return (
        <div>
            <h1 class='text-center'>Employee Directory</h1>
            <h2 class='text-center'>Search for an employee: </h2>
            <datalist id='employeesList'>
                {props.employees.map(employee => <option>{employee.first_name}</option>)}
            </datalist>
            <input list='employeesList' type='text' class='form-control' id='employeeInput'></input>
        </div>
    )
}
