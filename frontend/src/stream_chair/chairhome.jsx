
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import  '../style/chair.css'
import ExamForm from './Examsession';
import QuestionForm from '../teachers/upload_que';
import ListofUsers from './listofusers';
import QuestionTable from '../teachers/quetable';
import Header from '../components/Auth/header';
import { Visibility } from "@material-ui/icons";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

const Chairhome = () => {
    const [questions, setQuestions] = useState([]);
  
  return (
    <>   
  <div className="profile_container">
    <div className="image_container">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="student_image"
          />
        </div>
        <div className="data_container">
          <span className="">Name: Abebe Kebede</span>
          <span className="">Department: COED</span>
          <Link className='logout'>Log out</Link>
        </div>
      </div>

    <div className="home">
    {/* <FeaturedInfo /> */}
    <div className="homeWidgets">
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Chairperson Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/chairhome/teach_register" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Add teachers
              </li>
            </Link>
            <Link to="/chairhome/stud_register" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Add Students
              </li>
            </Link>
            <Link to="/chairhome/list" className="link">
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                  List of Added Questions            
               </li>
            </Link>
            <Link to="/chairhome/createexam" className="link">
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              create Exam
            </li>
            </Link>
            <Link to="/chairhome/listofteach" className="link">
            <li className="sidebarListItem">
            <Visibility className="widgetSmIcon" />
               See Teacher's List
            </li>
            </Link>
            <Link to="/chairhome/listofstud" className="link">
            <li className="sidebarListItem">
            <Visibility className="widgetSmIcon" />
               See Student's List
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
    {/* <ListofUsers/> */}
    <ExamForm/>

    </div>
    </div>

    </>   
  );
}
export default Chairhome

// import React, { useState } from 'react';
// import QuestionForm from '../teachers/upload_que';

// const Chairhome = () => {
// const [question, setQuestion] = useState({ text: '', isImage: false });
// const [correctAnswer, setCorrectAnswer] = useState('');
// const [options, setOptions] = useState([
//   { text: '', isImage: false },
//   { text: '', isImage: false },
//   { text: '', isImage: false },
//   { text: '', isImage: false }
// ]);
//   const [questions, setQuestions] = useState([]);
//   const handleEditQuestion = (index) => {
//     const questionToEdit = questions[index];
//     setQuestion(questionToEdit.question);
//     setOptions(questionToEdit.options);
//     setCorrectAnswer(questionToEdit.correctAnswer);
//     setQuestions(questions.filter((_, i) => i !== index));
//   };

//   const handleDeleteQuestion = (index) => {
//     if (window.confirm('Are you sure you want to delete the question?')) {
//       setQuestions(questions.filter((_, i) => i !== index));
//     }
//   };
//   return (
//     <div>
//       <h1>Chairperson Page</h1>
//     <QuestionTable questions={questions} /> 

//       {/* <QuestionForm questions={questions} setQuestions={setQuestions} /> */}
//       <hr />
//       <h2>Added Questions</h2>
//       {questions.length === 0 ? (
//         <p>No questions added yet.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Question Number</th>
//               <th>Question</th>
//               <th>Option 1</th>
//               <th>Option 2</th>
//               <th>Option 3</th>
//               <th>Option 4</th>
//               <th>Answer</th>
//             </tr>
//           </thead>
//           <tbody>
//             {questions.map((question, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{question.question.text}</td>
//                 {question.options.map((option, index) => (
//                   <td key={index}>
//                     {option.isImage ? (
//                       <img src={option.text} alt={`Option ${index + 2}`} />
//                     ) : (
//                       <p>{option.text}</p>
//                     )}
//                   </td>
//                 ))}
//                 <td>{question.options[parseInt(question.correctAnswer.charAt(6)) - 1].text}</td>
//                 <td></td>
//                 <td>
//                   <button onClick={() => handleEditQuestion(index)}>Edit</button>
//                 </td>
//                 <td>
//                   <button onClick={() => handleDeleteQuestion(index)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Chairhome;