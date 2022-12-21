import React,{ useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import StudentList from './Components/Students/StudentList/StudentList';
import StudentFormCreate from './Components/Students/StudentCreate/StudentFormCreate';

import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = useState({});

  const onLoadUser = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  const onSignOut = () => {
    sessionStorage.clear();
    setUser({});
  };

  return (
    <div>
      <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login onLoadUser={onLoadUser} />}></Route>
          <Route
            path="/Login"
            element={<Login onLoadUser={onLoadUser} />}
          ></Route>
          <Route path="/Register" element={<Register />} />
          <Route
            path="/StudentList"
            element={<StudentList user={user} onSignOut={onSignOut} />}
          />
          <Route path="/StudentFormCreate" element={<StudentFormCreate />} />
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;