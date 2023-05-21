import React, { useState } from 'react'
import { Link } from "react-router-dom";
import QuestionForm from '../teachers/upload_que';
import QuestionTable from '../teachers/quetable';
const Chairhome = () => {
  const [questions, setQuestions] = useState([]);

  return (
    <div>
        <h3>chairhome</h3>
        <Link to="/chairhome/teach_register"><button type="submit"  className="log_btn">add Teachers</button></Link> 
        <Link to="/chairhome/stud_register"><button type="submit"  className="log_btn">add Students</button></Link> 
        {/* <QuestionForm questions={questions} setQuestions={setQuestions} /> */}
        <QuestionTable questions={questions} /> 

    </div>
  )
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