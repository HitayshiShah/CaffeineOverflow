import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";

const Record = (props) => (
    <tr>
        <td>{props.record.person_name}</td>
        <td>{props.record.person_position}</td>
        <td>{props.record.person_level}</td>
    </tr>
);

export default class RecordList extends Component {
    // This is the constructor that shall store our data retrieved from the database
    constructor(props) {
        super(props);
        this.state = { records: [] };
    }

    // This method will get the data from the database.
    componentDidMount() {
        axios
            .get("http://localhost:5000/record/")
            .then((response) => {
                this.setState({ records: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    // This method will map out the users on the table
    recordList() {
        return this.state.records.map((currentrecord) => {
            return (
                <Record
                    record={currentrecord}
                    key={currentrecord._id}
                />
            );
        });
    }

    // This following section will display the table with the records of individuals.
    render() {
        return (
            <div>
                <h3>Record List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Level</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{this.recordList()}</tbody>
                </table>
            </div>
        );
    }
}