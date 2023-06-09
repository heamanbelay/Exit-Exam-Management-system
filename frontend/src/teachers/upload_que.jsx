import React, { useState, useEffect } from 'react';
import './QuestionForm.css';
import { Link } from "react-router-dom";

// import axios from "axios";
const QuestionForm = () => {
  const [question, setQuestion] = useState({ text: '', isImage: false });
  const [options, setOptions] = useState([
    { text: '', isImage: false },
    { text: '', isImage: false },
    { text: '', isImage: false },
    { text: '', isImage: false }
  ]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [questions, setQuestions] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const toggleProfile = () => {
  setShowProfile(!showProfile);
};
  useEffect(() => {
    console.log(questions);
  }, [questions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!question.text) {
      errors.question = 'Question is required';
    }
    if (options.some((option) => !option.text)) {
      errors.options = 'All options are required';
    }
    if (!correctAnswer) {
      errors.correctAnswer = 'Correct answer is required';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    const newQuestion = {
      question,
      options,
      correctAnswer
    };
    setQuestions([...questions, newQuestion]); // Add the new question to the questions array
    alert('Question added successfully!');
    setQuestion({ text: '', isImage: false });
    setOptions([
      { text: '', isImage: false },
      { text: '', isImage: false },
      { text: '', isImage: false },
      { text: '', isImage: false }
    ]);
    setCorrectAnswer('');
    setFormErrors({});
  };

  const handleQuestionTextChange = (e) => {
    setQuestion({ text: e.target.value, isImage: false });
  };

  const handleQuestionImageChange = (e) => {
    setQuestion({ text: e.target.value, isImage: true });
  };

  const handleOptionTextChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index].text = e.target.value;
    newOptions[index].isImage = false;
    setOptions(newOptions);
  };

  const handleOptionImageChange = (e, index) => {
    const newOptions = [...options];
    newOptions[index].text = e.target.value;
    newOptions[index].isImage = true;
    setOptions(newOptions);
  };

  const handleOptionTypeChange = (index, isImage) => {
    const newOptions = [...options];
    newOptions[index].isImage = isImage;
    setOptions(newOptions);
  };

  const handleEditQuestion = (index) => {
    const questionToEdit = questions[index];
    setQuestion(questionToEdit.question);
    setOptions(questionToEdit.options);
    setCorrectAnswer(questionToEdit.correctAnswer);
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleDeleteQuestion = (index) => {
    if (window.confirm('Are you sure you want to delete the question?')) {
      setQuestions(questions.filter((_, i) => i !== index));
    }
  };

 const handleFormSubmit = () => {
    
 }

  const renderOption = (option, index) => {
    return (
      
           <div key={index}>
        <label htmlFor={`option${index + 1}`} className='texts'>Option {index + 1}:</label>
        <select
          className='type'
          id={`option${index + 1}`}
          value={option.isImage ? 'image' : 'text'}
          onChange={(e) =>
            handleOptionTypeChange(index, e.target.value === 'image')
          }
        >
          <option value="text">--Text--</option>
          <option value="image">--Image URL--</option>
        </select>
        {option.isImage ? (
          <div>
            <input
              className='type'
              type="text"
              id={`optionImage${index + 1}`}
              placeholder="Image URL"
              value={option.text}
              onChange={(e) => handleOptionImageChange(e, index)}
            />
            <br />
            <img src={option.text} alt={`Option ${index + 1}`} />
          </div>
        ) : (
          <input
            type="text"
            id={`option${index + 1}`}
            value={option.text}
            onChange={(e) => handleOptionTextChange(e, index)}
          />
        )}
        {formErrors.options && <div className="error">{formErrors.options}</div>}
        <br />
      </div>
    );
    
  };

  return (
    <>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <div>
      <button onClick={toggleProfile} className='view'>
        View Profile
      </button>
      {showProfile && (
        <div className="profile_container">
          <div className="image_container">
            <img
              src=""
              alt=""
              className="student_image"
            />
          </div>
          <div className="data_container">
            <span className="">Name: Abebe Kebede</span>
            <span className="">Id: 11031234</span>
            <Link className='logout'>Log out</Link>
          </div>
        </div>
      )}
    </div>

    <div className="question-form-container">
      <form onSubmit={handleSubmit}>
      {/* <label>
        <div className="select">
                <Field
                  as="select"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  name="course"
                >
                  <option value="" disabled hidden>
                    Select a Course
                  </option>
                  {courseOptions &&
                    courseOptions.map((option) => (
                      <option key={option._id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                </Field>
           <div className="select-arrow"></div>
        </div>
     </label> */}
        <label htmlFor="question" className='texts'>Question:</label>
        <select
          className='type'
          id="questionType"
          value={question.isImage ? 'image' : 'text'}
          onChange={(e) =>
            setQuestion({ text: question.text, isImage: e.target.value === 'image' })
          }
        >
          <option value="text">Text</option>
          <option value="image">Image URL</option>
        </select>
        {question.isImage ? (
          <input
            type="text"
            id="questionImage"
            placeholder="Image URL"
            value={question.text}
            onChange={handleQuestionImageChange}
          />
        ) : (
          <input
            type="text"
            id="question"
            value={question.text}
            onChange={handleQuestionTextChange}
          />
        )}
        {formErrors.question && <div className="error">{formErrors.question}</div>}
        <br />
        {options.map(renderOption)}
        <label htmlFor="correctAnswer" className='texts'>Correct Answer:</label>
        <select
          id="correctAnswer"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        >
          <option value="">--Select an option--</option>
          {options.map((option, index) => (
            <option key={index} value={`option${index + 1}`}>
              {option.text}
            </option>
          ))}
        </select>
        {formErrors.correctAnswer && <div className="error">{formErrors.correctAnswer}</div>}
        <br />
        <button type="submit" className='btn'>Add Question</button>
      </form>
      <hr />
      <h2>Added Questions</h2>
      {questions.length === 0 ? (
        <p>No questions added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Question Number</th>
              <th>Question</th>
              <th>Option 1</th>
              <th>Option 2</th>
              <th>Option 3</th>
              <th>Option 4</th>
              <th>Answer</th>
              
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{question.question.text}</td>
                {question.options.map((option, index) => (
                  <td key={index}>
                    {option.isImage ? (
                      <img src={option.text} alt={`Option ${index + 2}`} />
                    ) : (
                      <p>{option.text}</p>
                    )}
                  </td>
                ))}
               <td>{question.options[parseInt(question.correctAnswer.charAt(6)) - 1].text}</td>
                   <td></td>
                <td>
                  <button onClick={() => handleEditQuestion(index)}>
                  <i className="fas fa-edit"></i>
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDeleteQuestion(index)}>
                  <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {questions.length > 0 && <button onClick={handleFormSubmit} className='btn'>Submit Questions</button>}

    </div>
    </>
  );
};

export default QuestionForm;
// import React, { useState } from 'react';

// const QuestionForm = () => {
//   const [question, setQuestion] = useState({ text: '', isImage: false });
//   const [options, setOptions] = useState([
//     { text: '', isImage: false },
//     { text: '', isImage: false },
//     { text: '', isImage: false },
//     { text: '', isImage: false }
//   ]);
//   const [correctAnswer, setCorrectAnswer] = useState('');
//   const [formErrors, setFormErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = {};
//     if (!question.text) {
//       errors.question = 'Question is required';
//     }
//     if (options.some((option) => !option.text)) {
//       errors.options = 'All options are required';
//     }
//     if (!correctAnswer) {
//       errors.correctAnswer = 'Correct answer is required';
//     }
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }
//     const newQuestion = {
//       question,
//       options,
//       correctAnswer
//     };
//     console.log(newQuestion); // Log the new question object to the console
//     alert('Question added successfully!');
//     setQuestion({ text: '', isImage: false });
//     setOptions([
//       { text: '', isImage: false },
//       { text: '', isImage: false },
//       { text: '', isImage: false },
//       { text: '', isImage: false }
//     ]);
//     setCorrectAnswer('');
//     setFormErrors({});
//   };

//   const handleQuestionTextChange = (e) => {
//     setQuestion({ text: e.target.value, isImage: false });
//   };

//   const handleQuestionImageChange = (e) => {
//     setQuestion({ text: e.target.value, isImage: true });
//   };

//   const handleOptionTextChange = (e, index) => {
//     const newOptions = [...options];
//     newOptions[index].text = e.target.value;
//     newOptions[index].isImage =  !newOptions[index].isImage;
//     setOptions(newOptions);
//   };

//   const handleOptionImageChange = (e, index) => {
//     const newOptions = [...options];
//     newOptions[index].text = e.target.value;
//     newOptions[index].isImage = true;
//     setOptions(newOptions);
//   };
  

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="question">Question:</label>
//       <select
//         id="questionType"
//         value={question.isImage ? 'image' : 'text'}
//         onChange={(e) =>
//           setQuestion({ text: question.text, isImage: e.target.value === 'image' })
//         }
//       >
//         <option value="text">Text</option>
//         <option value="image">Image URL</option>
//       </select>
//       {question.isImage ? (
//         <input
//           type="text"
//           id="questionImage"
//           placeholder="Image URL"
//           value={question.text}
//           onChange={handleQuestionImageChange}
//         />
//       ) : (
//         <input
//           type="text"
//           id="question"
//           value={question.text}
//           onChange={handleQuestionTextChange}
//         />
//       )}
//       {formErrors.question && <div className="error">{formErrors.question}</div>}
//       <br />
//       {options.map((option, index) => (
//         <div key={index}>
//           <label htmlFor={`option${index + 1}`}>Option {index + 1}:</label>
//           <select
//             id={`optionType${index + 1}`}
//             value={option.isImage ? 'image' : 'text'}
//             onChange={(e) =>
//               option.isImage
//                 ? handleOptionImageChange(e, index)
//                 : handleOptionTextChange(e, index)
//             }
//           >
//             <option value="text">Text</option>
//             <option value="image">Image URL</option>
//           </select>
//           {option.isImage ? (
//             <input
//               type="text"
//               id={`optionImage${index + 1}`}
//               placeholder="Image URL"
//               value={option.text}
//               onChange={(e) =>
//                 handleOptionImageChange(e, index)
//               }
//             />
//           ) : (
//             <input
//               type="text"
//               id={`option${index + 1}`}
//               value={option.text}
//               onChange={(e) =>
//                 handleOptionTextChange(e, index)
//               }
//             />
//           )}
//           {formErrors.options && <div className="error">{formErrors.options}</div>}
//           <br />
//         </div>
//       ))}
//       <label htmlFor="correctAnswer">Correct Answer:</label>
//       <select
//         id="correctAnswer"
//         value={correctAnswer}
//         onChange={(e) => setCorrectAnswer(e.target.value)}
//       >
//         <option value="">--Select an option--</option>
//         {options.map((option, index) => (
//           <option key={index} value={`option${index + 1}`}>
//             {option.text}
//           </option>
//         ))}
//       </select>
//       {formErrors.correctAnswer && <div className="error">{formErrors.correctAnswer}</div>}
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default QuestionForm;