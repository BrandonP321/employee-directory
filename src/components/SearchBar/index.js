import React from 'react'
import './style.css'

export default function SearchBar(props) {
    return (
        <div>
            <h2 class='text-center'>Search for an employee: </h2>
            <datalist id='employeesList'>
                {props.employees.map(employee => <option>{employee.name}</option>)}
            </datalist>
            <form onSubmit={props.handleSearch}>
                <div class='form-group'>
                    <div class='row'>
                        <div class='col-md-10'>
                            <input list='employeesList' type='text' class='form-control' id='employeeInput'></input>
                        </div>
                        <div class='col-md-2'>
                            <button type='submit' class='btn btn-primary'>Search</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
