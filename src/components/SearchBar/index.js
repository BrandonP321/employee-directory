import React from 'react'

export default function SearchBar(props) {
    return (
        <div>
            <h2 class='text-center'>Search for an employee: </h2>
            <datalist id='employeesList'>
                {props.employees.map(employee => <option>{employee.name}</option>)}
            </datalist>
            <form onSubmit={props.handleSearch}>
                <div class='form-group'>
                    <input list='employeesList' type='text' class='form-control' id='employeeInput'></input>
                    <button type='submit' class='btn btn-primary'>Search</button>
                </div>
            </form>
        </div>
    )
}
