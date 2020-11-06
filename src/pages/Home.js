import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import EmployeeCard from '../components/EmployeeCard'
import employees from '../employees.json'

export default class Home extends Component {
    state = {
        employeesArr: employees
    }

    componentDidMount = () => {
        this.setState({ employeesArr: employees})
    }

    handleSearchInput = (event) => {

    }

    render() {
        return (
            <div>
                <SearchBar employees={this.state.employeesArr} />
                {this.state.employeesArr.map(employee => <EmployeeCard employeeInfo={employee} />)}
            </div>
        )
    }
}
