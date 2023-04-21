import { Routes, Route } from "react-router-dom"
import Home from "./components/Auth/home.jsx";
import RegistrationForm from './components/Auth/register.jsx';
import LoginForm from "./components/Auth/login";
import Quiz from "./components/Quizz/quiz.jsx";
import Result from "./components/Quizz/result.jsx";
import Main from "./components/Quizz/main.jsx";
import "./components/Quizz/styles/app.css"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="register" element={ <RegistrationForm/> } />
        <Route path="login" element={ <LoginForm/> } />
        <Route path="main/quiz" element={ <Quiz/> } />
        <Route path="result" element={ <Result/> } />
        <Route path="main" element={ <Main/> } />

      </Routes>
    </div>
  )
}
export default App
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
