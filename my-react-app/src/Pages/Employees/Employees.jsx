import "./employees.css";
import { DataGrid } from '@mui/x-data-grid';
import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Employees() {

  const Employee = (props) => (
    <tr>
      <td>{props.empolyee.id}</td>
      <td>{props.empolyee.userName}</td>
      <td>{props.empolyee.email}</td>
      <td>{props.empolyee.salary}</td>
      <td>{props.empolyee.status}</td>
    </tr>
  );

  export default class EmployeeList extends Component {
    constructor(props) {
      super(props);
      this.state = { employees: [] };
    }

    // This method will get the data from the database.
    componentDidMount() {
      axios
        .get("http://localhost:5000/dashboard/")
        .then((response) => {
          this.setState({ employees: response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    // This method will map out the users on the table
    employeeList() {
      return this.state.employees.map((currentemployee) => {
        return (
          <Employee
            employee={currentemployees}
            key={currentemployee._id}
          />
        );
      });
    }

    render() {
      return (
        <div>
          <h3>Employee List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{this.EmployeeList()}</tbody>
          </table>
        </div>
      );
    }
  }
}