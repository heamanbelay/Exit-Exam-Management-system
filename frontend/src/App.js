// import { Routes, Route } from "react-router-dom"
// import Home from "./components/Auth/home.jsx";
// import RegistrationForm from './components/Auth/register.jsx';
// import LoginForm from "./components/Auth/login";
// import Result from "./components/Examm/result.jsx";
// import Main from "./components/Examm/main.jsx";
// import "./components/Examm/styles/app.css"
// import Exam from "./components/Examm/exam.jsx";
// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={ <Home/> } />
//         <Route path="register" element={ <RegistrationForm/> } />
//         <Route path="login" element={ <LoginForm/> } />
//         <Route path="login/main/exa" element={ <Exam/> } />
//         <Route path="result" element={ <Result/> } />
//         <Route path="login/main" element={ <Main/> } />
//       </Routes>
//     </div>
//   )
// }
// export default App


// import Header from './components/Auth/header.jsx'
// import RegistrationForm from './components/Auth/register.jsx';
// import loginForm from './components/Auth/login.jsx'

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// function App() {
//   return (
//     <div className="App">
//           {/* <Header/> */}
//           <RegistrationForm/>
//           <loginForm/>
//     </div>
//   );
// }

// export default App;
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from "./components/Auth/home.jsx";
import LoginForm from "./components/Auth/login";
import Result from "./components/Examm/result.jsx";
import Main from "./components/Examm/main.jsx";
import QuestionForm from './teachers/upload_que.jsx';
import "./components/Examm/styles/app.css"
import Exam from "./components/Examm/exam.jsx";
import { CheckUserExist } from './components/Examm/helper/helper';
import DeptRegistrationForm from './superadmin/chair_add.jsx';
// import FaculRegistration from './Faculty/faculty.jsx';
import StudRegistrationForm from './stream_chair/addStudent.jsx';
import TeachRegistrationForm from './stream_chair/addTeachers.jsx';
import SupRegistrationForm from './superadmin/facul_add.jsx';
import Chairhome from './stream_chair/chairhome.jsx';
import SelfSuperRegister from './superadmin/selfregister.jsx';
import ExamForm from './stream_chair/createExam.jsx';
import QueList from './stream_chair/questionlist.jsx';
import Studlist from './stream_chair/studlist.jsx';
import Teachlist from './stream_chair/teachlist.jsx';
import Admindash from './superadmin/admin_dashboard.jsx';
import ChairRegistration from './superadmin/chair_add.jsx';
import FaculRegistration from './superadmin/facul_add.jsx';
import DeptRegistration from './superadmin/dept_add.jsx';
import Students from './superadmin/studlist.jsx';
import Teachers from './superadmin/teachlist.jsx';
import Chairs from './superadmin/chairs.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>
  },
{
    path : '/login',
    element : <LoginForm></LoginForm>
  },
  {
    path : 'login/main/exa',
    element : <CheckUserExist><Exam/></CheckUserExist>
  },
  {
    path : 'login/main',
    element : <Main></Main>
  },
  {
    path : 'login/main/exa/result',
    element : <CheckUserExist><Result/></CheckUserExist> 
  },
  {
    path : 'login/teacher',
    element : <QuestionForm></QuestionForm>
  },
  // {
  //   path : '/super_register',
  //   element : <SupRegistrationForm ></SupRegistrationForm>
  // },
  // {
  //   path : '/self_register',
  //   element : <SelfSuperRegister ></SelfSuperRegister>
  // },
  // {
  //   path : '/faculity_register',
  //   element : <FaculRegistrationForm ></FaculRegistrationForm>
  // },
  // {
  //   path : '/dept_register',
  //   element : <DeptRegistrationForm></DeptRegistrationForm>
  // },
  
  {
    path : '/admindash',
    element : <Admindash></Admindash>
  },

  
  {
    path : '/chairhome',
    element : < Chairhome></Chairhome>
  },

// {
//     path : '',
//     element : < Chairhome></Chairhome>
//   },
  {
    path : '/admindash/facul_add',
    element : < FaculRegistration></FaculRegistration>
  },
  {
    path : '/admindash/chair_add',
    element : <ChairRegistration></ChairRegistration>
  },
  {
    path : '/admindash/dept_add',
    element : <DeptRegistration></DeptRegistration>
  },
  {
    path : '/admindash/students',
    element : <Students></Students>
  },
  {
    path : '/admindash/teachers',
    element : <Teachers></Teachers>
  },
  {
    path : '/admindash/chairs',
    element : <Chairs></Chairs>
  },


  
  {
    path : '/chairhome/stud_register',
    element : <StudRegistrationForm ></StudRegistrationForm>
  },
  {
    path : '/chairhome/teach_register',
    element : <TeachRegistrationForm ></TeachRegistrationForm>
  },
 
  {
    path : '/chairhome/examform',
    element : <ExamForm ></ExamForm>
  },
  {
    path : '/chairhome/list',
    element : <QueList></QueList>
  },
  {
    path : '/chairhome/listofstud',
    element : <Studlist></Studlist>
  },
  {
    path : '/chairhome/listofteach',
    element : <Teachlist></Teachlist>
  },
  ])
function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;

