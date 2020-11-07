import React, { Component } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import EmployeeCard from '../components/EmployeeCard'
import employees from '../employees.json'

export default class Home extends Component {
    state = {
        employeesArr: employees
    }

    handleSearch = (event) => {
        event.preventDefault();

        // grab value from input form
        const userSearch = event.target.children[0].children[0].value

        // match all employees who match the search
        const newEmployees = employees.filter(employee => {
            // REGEX for checking employee name
            const nameRegex = new RegExp('^' + userSearch + '.', 'i')

            // check if the user's query matches atleast the beginning of the employees full name
            return nameRegex.test(employee.name)
        })

        // set array of employees in state to new filtered array
        this.setState({ employeesArr: newEmployees })
    }

    render() {
        return (
            <div>
                <Header />
                <SearchBar employees={this.state.employeesArr} handleSearch={this.handleSearch} />
                {this.state.employeesArr.map(employee => <EmployeeCard employeeInfo={employee} />)}
            </div>
        )
    }
}
