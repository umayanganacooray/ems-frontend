import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployee';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
              {/* <Route exact path = "/" component = {ListEmployeeComponent}></Route>
              <Route path = "/employees" component = {ListEmployeeComponent}></Route>
              <Route path = "/add-employee" component = {AddEmployeeComponent} ></Route> */}

              <Route exact path="/" element={<ListEmployeeComponent />} />
              <Route path="/employees" element={<ListEmployeeComponent />} />
              <Route path="/add-employee" element= {<AddEmployeeComponent />} />
              <Route path="/edit-employee/:id" element= {<AddEmployeeComponent />} />
              <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
