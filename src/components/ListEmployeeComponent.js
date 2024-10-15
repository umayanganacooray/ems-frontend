import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId)
            .then(() => {
                getAllEmployees();
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">List Employees</h2>
            <Link to="/add-employee" className="btn btn-primary mb-3">Add Employee</Link>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Employee Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <Link className="btn btn-info me-2" to={`/edit-employee/${employee.id}`}>Update</Link>
                                    <button className="btn btn-danger me-2" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                                    <Link className="btn btn-secondary" to={`/view-employee/${employee.id}`}>View</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListEmployeeComponent;
