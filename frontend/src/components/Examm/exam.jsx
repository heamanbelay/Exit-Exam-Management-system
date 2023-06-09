import React, { useEffect, useState } from 'react'
import Questions from './questions.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { MoveNextQuestion, movePrevQuestion } from './hooks/FetchQuestion.jsx' 
import { PushAnswer } from './hooks/setResult.jsx'
// import { useHistory } from 'react-router-dom'

export default function Exam(props) {

  const state = useSelector(state => state);
  const result = useSelector(state => state.result.result);
  const { queue, trace } = useSelector(state => state.questions);
  const dispatch = useDispatch()
  const [check, setChecked ] = useState()
  const [duration, setDuration] = useState(25); // 5 minutes
  const [time, setTime] = useState(duration);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  // const history = useHistory();

          useEffect(() => {
            console.log(state)
            setChecked(undefined)
          }, [trace])

          useEffect(() => {
            const interval = setInterval(() => {
              setTime(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(interval);
          }, []);

          useEffect(() => {
            if (time === 0) {
              props.history.replace('./result');

              // Time is up, navigate to the result page
              // return<Navigate to='./result' replace="true"></Navigate>
              // dispatch(Navigate('./result'));
            }
          }, [time,  props.history]);


    function onNext() {
      console.log('next button pressed');
      if (trace < queue.length) {
        dispatch(MoveNextQuestion());
    
        // insert a new result on the array only if the answer is selected
        if (check !== undefined) {
          if (result.length <= trace) {
            dispatch(PushAnswer(check));
            setAnsweredQuestions([...answeredQuestions, trace]);
          }
        } else {
          setAnsweredQuestions([...answeredQuestions]);
        }
    
        setChecked(undefined);
      }
    
    // console.log('next button pressed')
    // if(trace < queue.length){
    //   dispatch(MoveNextQuestion())

// insert a new result on the array

      // if(result.length <= trace){
      //   dispatch(PushAnswer(check))
      //   setAnsweredQuestions([...answeredQuestions, trace]);       }
      //  setChecked(undefined);

    }
    function handleQuestionClick(index) {
      dispatch({ type: 'SET_TRACE', payload: index });
    }
  function onPrev(){
    console.log('previous button pressed')
    if (trace > 0){
    dispatch(movePrevQuestion())
    }
    else{
      setChecked(undefined);
    }
  }
  function onChecked(check){
    console.log(check)
    setChecked(check)
  }
  if(result.length && result.length >= queue.length){
    props.history.replace('./result');
  }
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  return (
    <div className='contain'>
        {/* <h1 className='title text-light'>Good Luck</h1> */}
        <div className='timer'>Time left: {formattedTime}</div>          
          <Questions onChecked={onChecked}></Questions>
            <div className='grid'>
            { trace > 0 ? <button className='prev_btn' onClick={onPrev}>Previos</button> : <div></div>}
              <button className='nxt_btn' onClick={onNext}>Next</button>          
        </div>
        
    <div className='question-list'>
        {queue.map((_, index) => (
          <button
            key={index}
            className={`question-button ${answeredQuestions.includes(index) ? 'answered' : ''}`}
            onClick={() =>handleQuestionClick (index) }
          >
            {index + 1}
          </button>
        ))}
      </div>  
    </div>
    
  )
}

// import React, { useEffect } from 'react'
// import Questions from './questions.jsx'

// /** redux store import */
// import { useSelector, useDispatch } from 'react-redux'
// import { Navigate } from 'react-router-dom'
// import { moveNextQuestion, movePrevQuestion } from '../redux/question_reducer'

// export default function Exam() {
//   const trace = useSelector(state => state.questions.trace);
//   const { queue } = useSelector(state => state.questions);
//   const dispatch = useDispatch()

//   useEffect(() => {
//     console.log(trace)
//   })

//   function onNext() {
//     dispatch(moveNextQuestion())
//   }

//   function onPrev() {
//     dispatch(movePrevQuestion())
//   }

//   return (
//     <div className='contain'>
//       <h1 className='title text-light'>Good Luck</h1>
//       <Questions></Questions>
//       <div className='grid'>
//         <button className='prev_btn' onClick={onPrev}>Prev</button>
//         <button className='nxt_btn' onClick={onNext}>Next</button>
//       </div>
//     </div>
//   )
// }