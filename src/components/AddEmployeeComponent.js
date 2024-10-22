import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [age, setAge] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            EmployeeService.getEmployeeById(id)
                .then((response) => {
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                    setEmailId(response.data.emailId);
                    setAge(response.data.age);
                    setPhoneNo(response.data.phoneNo);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [id]);

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = { firstName, lastName, emailId, age, phoneNo};

        if (id) {
            EmployeeService.updateEmployee(id, employee)
                .then(() => navigate('/employees'))
                .catch(error => console.log(error));
        } else {
            EmployeeService.createEmployee(employee)
                .then(() => navigate('/employees'))
                .catch(error => console.log(error));
        }
    }

    const title = () => {
        return id ? <h2 className="text-center mb-4">Update Employee</h2> : <h2 className="text-center mb-4">Add Employee</h2>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            {title()}
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="emailId" className="form-label">Email Id</label>
                                    <input type="email" className="form-control" id="emailId" placeholder="Enter email id" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="age" className="form-label">Age</label>
                                    <input type="text" className="form-control" id="age" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phoneNo" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="phoneNo" placeholder="Enter phone number" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-success me-2" onClick={saveOrUpdateEmployee}>Submit</button>
                                <Link to="/employees" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEmployeeComponent;
