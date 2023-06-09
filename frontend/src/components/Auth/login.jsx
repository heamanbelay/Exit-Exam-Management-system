
// import React, {useState, useRef} from 'react';
// import { Link } from "react-router-dom";
// import './login.css'
// import {users} from '../mockdata/userdatabase'


// const LoginForm = ({ setRole, setFeatures }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const user = users.find((user) => user.username === username && user.password === password);
//       if (user) {
//         // setRole(user.role);
//         // setFeatures(user.features);
//         console.log('Login successful');

//       } else {
//         // alert('Invalid username or password');
//         console.log('Login failed');

//       }
//     };
  
//     function handleUsernameChange(event) {
//       setUsername(event.target.value);
//     }
  
//     function handlePasswordChange(event) {
//       setPassword(event.target.value);
//     }
  
//     // function handleSubmit(event) {
//     //   event.preventDefault();
//     //   const user = mockUsers.find(user => user.username === username && user.password === password);
//     //   if (user) {
//     //     console.log('Login successful');
//     //   } else {
//     //     console.log('Login failed');
//     //   }
//     // }
  
//     return(
//   <form onSubmit={handleSubmit}>
//       <div className="formm">
//           <div className="log_form">
//               <div className="username">
//                   {/* <label className="form__label" for="email">Email </label> */}
//                   <input  type="username" id="un" className="input_login" placeholder="Username" value={username} onChange={(handleUsernameChange) } />
//               </div>
//               <div className="log_password">
//                   {/* <label className="form__label" for="password">Password </label> */}
//                   <input className="input_login" type="password"  id="password" placeholder="Password"  value={password} onChange={(handlePasswordChange) } />
//               </div>
//               {/* <button type="submit"  class="log_btn">Login</button> */}
//               <Link className="log_btn" onSubmit={handleSubmit}> Login </Link>
//               {/* to="/login/main" */}
//             <div className='forgot'>
//               <Link to="/password/forgot"><p>Forgot Password ?</p></Link>
//             </div>
//           </div>
//       </div>    
//       </form>  
//     )       
// }
// export default LoginForm;
    
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './login.css'
// import { users } from '../mockdata/userdatabase'

const users = [
  {
    email: 'admin@gmail.com',
    password: 'admin123',
    role: 'superadmin',
  },
  {
    email: 'facul@gmail.com',
      password: 'facul123',
      role: 'faculityhead',
    },
  {
    email: 'dept@gmail.com',
    password: 'dept123',
    role: 'depthead',
  },
  {
    email: 'chair@gmail.com',
    password: 'chair123',
    role: 'chair',
  },
  {
    email: 'teach@gmail.com',
      password: 'teach123',
      role: 'teacher',
    },
    {
      email: 'stud@gmail.com',
      password: 'stud123',
      role: 'student',
    }
];
function LoginForm() {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
    console.log(email);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    console.log(password);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (users.length > 0) {
    const user = users.find(user => user.email === email && user.password === password);
    console.log(user);
    if (user) {
      console.log('Login successful');
      switch (user.role) {
         case 'superadmin':
            navigate("/admindash");
            break;       
        //  case 'faculityhead':
        //     navigate("/faculity_register");
        //     break;
          // case 'depthead':
          //   navigate("/dept_register");
          //   break;
          case 'chair':
            navigate("/chairhome");
            break;
          case 'teacher':
            navigate("/login/teacher");
            break;
          case 'student':
            navigate("/login/main");
            break;
        default:
          navigate('/');
      }
    } 
      else {
      alert('Incorrect Email or password');
      console.log('Login failed');

    }
  }
  else {
    alert('No users found');
    console.log('No users found');
  }
}

  return (
    <form onSubmit={handleSubmit}>
      <div className="formm">
          <div className="log_form">
               <div className="username">
                   {/* <label className="form__label" for="email">Email </label> */}
                   <input  type="email" id="un" className="input_login" placeholder="Email" value={email} onChange={(handleUsernameChange) } />
               </div>
               <div className="log_password">
                   {/* <label className="form__label" for="password">Password </label> */}
                   <input className="input_login" type="password"  id="password" placeholder="Password"  value={password} onChange={(handlePasswordChange) } />
               </div>
               <button type="submit"  className="log_btn">Login</button>
               {/* <Link className="log_btn" type="submit"> Login </Link> */}
               <div className='forgot'>
               <Link to="/password/forgot" ><p>Forgot Password ?</p></Link>
            </div>
          </div>
       </div>    
    </form> 
  );
}
export default LoginForm;

      {/* <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
  <button type="submit">Login</button> */}
    