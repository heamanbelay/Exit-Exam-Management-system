import React, { useState } from 'react'
import { Link } from "react-router-dom";
import  '../style/chair.css'
import QuestionForm from '../teachers/upload_que';
import QuestionTable from '../teachers/quetable';
import ListofUsers from '../stream_chair/listofusers';
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

const Faculhome = () => {
    const [questions, setQuestions] = useState([]);
  
  return (
    <>   

    {/* <Header/> */}

    <div className="home">
    {/* <FeaturedInfo /> */}
    <div className="homeWidgets">
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Stream Chair Dashboard</h3>
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
                Add Department Heads
              </li>
            </Link>
            <Link to="/chairhome/list" className="link">
        
            </Link>
            <Link to="/chairhome/listofteach" className="link">
            <li className="sidebarListItem">
            <Visibility className="widgetSmIcon" />
               See Department Head's List
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

    </div>
    </div>
    </>   

  );
}
export default Faculhome