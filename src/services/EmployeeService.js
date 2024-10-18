import axios from "axios";
const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080';

class EmployeeService{
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL+ '/employees')      
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL+ '/employees', employee)
    }
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/employees/'+ employeeId)
    }
    updateEmployee(employeeId,employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/employees/' + employeeId,employee)
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/employees/' + employeeId)
    }
}

export default new EmployeeService();