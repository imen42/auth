import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingUp from './components/SingUp';
import SingIn from './components/SingIn';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route  path="/login" element={<SingIn/>} />
        <Route path="/" element={<SingUp/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
