import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import './App.css';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingUp from './components/SingUp';
import SingIn from './components/SingIn';
import StudentSpace from './components/StudentSpace';
import AdminDashboard from './components/AdminDashboard ';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<SingUp/>}/>
        <Route  path="/login" element={<SingIn/>} />
        <Route  path="/studentSpace" element={<StudentSpace/>} />
        <Route path='/admindash' element={<AdminDashboard/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
