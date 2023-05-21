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
import DeptRegistrationForm from './Dept head/dept_head.jsx';
import FaculRegistrationForm from './Faculty/facul_head.jsx';
// import Ch_registrationForm from './stream_chair/register.jsx';
import StudRegistrationForm from './stream_chair/addStudent.jsx';
import TeachRegistrationForm from './stream_chair/addTeachers.jsx';
// import TeachRegistrationForm from './teachers/register.jsx';
import SupRegistrationForm from './superadmin/super_register.jsx';
import Chairhome from './stream_chair/chairhome.jsx';
import RegisterForm from './components/Auth/register.jsx';
import SelfSuperRegister from './superadmin/selfregister.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>
  },
  {
    path : '/register',
    element : <RegisterForm ></RegisterForm>
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
  {
    path : '/super_register',
    element : <SupRegistrationForm ></SupRegistrationForm>
  },
  {
    path : '/faculity_register',
    element : <FaculRegistrationForm ></FaculRegistrationForm>
  },
  {
    path : '/dept_register',
    element : < DeptRegistrationForm></DeptRegistrationForm>
  },
  {
    path : '/chairhome',
    element : < Chairhome></Chairhome>
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
    path : '/self_register',
    element : <SelfSuperRegister ></SelfSuperRegister>
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
