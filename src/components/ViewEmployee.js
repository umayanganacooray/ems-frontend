import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ViewEmployeeComponent = () => {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();

    useEffect(() => {
        EmployeeService.getEmployeeById(id)
            .then((response) => {
                setEmployee(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Employee Details</h3>
                        </div>
                        <div className="card-body">
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label"><strong>First Name:</strong></label>
                                <div className="col-sm-8">
                                    <p className="form-control-plaintext">{employee.firstName}</p>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label"><strong>Last Name:</strong></label>
                                <div className="col-sm-8">
                                    <p className="form-control-plaintext">{employee.lastName}</p>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label"><strong>Email ID:</strong></label>
                                <div className="col-sm-8">
                                    <p className="form-control-plaintext">{employee.emailId}</p>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label"><strong>Age:</strong></label>
                                <div className="col-sm-8">
                                    <p className="form-control-plaintext">{employee.age}</p>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label"><strong>Phone Number:</strong></label>
                                <div className="col-sm-8">
                                    <p className="form-control-plaintext">{employee.phoneNo}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <Link to="/employees" className="btn btn-primary">Back to List</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewEmployeeComponent;
