import React from 'react'
import { Link } from "react-router-dom";
import "./home.css"
import Header from "./header";
import Footer from './footer';
// import ExitExamImage1 from '../images/exit-exam-1.jpg';
// import ExitExamImage2 from '../images/exit-exam-2.jpg';

const Home = ({ role, features }) => {
  return (
    <>   

    <Header/>
    <section className="exit-exam">
      <div className="container">
        <h2>Exit Exam</h2>
        <p>The exit exam is a test that students must take before they graduate from the university. The exam is designed to measure the knowledge and skills that students have acquired during their studies. Here are some rules and regulations that you need to know before taking the exam:</p>
        <ul className='list'>
          <li>1. The exam is mandatory for all graduating students.</li>
          <li>2. Students must register for the exam at least two weeks before the exam date.</li>
          <li>3. The exam will cover all the major subjects that the student has studied during their degree program.</li>
          <li>4. The exam will be timed and students will have a specific amount of time to complete it.</li>
          <li>5. Students must bring a valid ID card to the exam.</li>
        </ul>
        {/* <div className="exit-exam-images">
          <img src={ExitExamImage1} alt="Exit Exam Image 1" />
          <img src={ExitExamImage2} alt="Exit Exam Image 2" />
        </div> */}
      </div>
    </section>
    {/* <div>
      {features && features.includes('dashboard') && (
        <div>
          <h3>Dashboard</h3>
          <p>This is the dashboard.</p>
        </div>
      )}
      {features && features.includes('users') && (
        <div>
          <h3>Users</h3>
          <p>This is the users page.</p>
        </div>
      )}
      {features && features.includes('reports') && (
        <div>
          <h3>Reports</h3>
          <p>This is the reports page.</p>
        </div>
      )}
    </div> */}
    </>
 
  );
};

export default Home;