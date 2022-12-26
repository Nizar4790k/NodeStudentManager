import React,{ useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router";

import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import StudentList from './Components/Students/StudentList/StudentList';
import StudentFormCreate from './Components/Students/StudentCreate/StudentFormCreate';
import StudentFormUpdate from './Components/Students/StudentUpdate/StudentFormUpdate';

import './App.css';
import GradeList from './Components/Grades/GradeList/GradeList';
import GradeFormUpdate from './Components/Grades/GradeFormUpdate/GradeFormUpdate';
import TodayAssistanceList from './Components/Assistance/TodayAssistanceList/TodayAssistanceList';
import PastAssistanceList from './Components/Assistance/PastAssistanceList/PastAssistanceList';


function App() {
  const [user, setUser] = useState({});
  const [selectStudent,setSelectedStudent] = useState({})
  
  const [selectedGrade,setSelectedGrade] = useState({})
  
  


  const onSignIn = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };


  const loadUser = (navigate) =>{
    
    const user = sessionStorage.getItem("user")

    if(user){
      setUser(user)
    }else{
      navigate('/Login')
    }
  }
 

  const onSignOut = () => {
    sessionStorage.clear();
    setUser({});
  };

  const onSelectStudent = (student)=>{
    console.log(student)
        
    setSelectedStudent(student)
  }

  const onSelectGrade = (grade)=>{
    console.log(grade)
        
    setSelectedGrade(grade)
  }

 

  return (
    <div>
      <div>
      <Router>     
        <Routes>
          <Route path="/" element={<Login onSignIn={onSignIn} />}></Route>
          <Route
            path="/Login"
            element={<Login onSignIn={onSignIn} />}
          ></Route>
          <Route path="/Register" element={<Register />} />
          <Route
            path="/StudentList"
            element={<StudentList user={user} onSignOut={onSignOut} onSelectStudent={onSelectStudent} loadUser={loadUser} />}
          />

          <Route path="/StudentFormCreate" element={<StudentFormCreate />} />
          <Route path="/StudentFormUpdate" element={<StudentFormUpdate student={selectStudent}/>} />

          <Route
            path="/GradeList"
            element={<GradeList user={user} onSignOut={onSignOut} loadUser={loadUser} onSelectGrade={onSelectGrade}/>}
          />
         <Route path="/GradeFormUpdate" element={<GradeFormUpdate grade={selectedGrade}/>} />
         

         <Route
            path="/StudentList"
            element={<StudentList user={user} onSignOut={onSignOut} onSelectStudent={onSelectStudent} loadUser={loadUser} />}
          />
         
         <Route
            path="/PastAssistanceList"
            element={<PastAssistanceList user={user} loadUser={loadUser}/>}
          />

        <Route
            path="/TodayAssistanceList"
            element={<TodayAssistanceList user={user} loadUser={loadUser}/>}
          />

          

          
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;