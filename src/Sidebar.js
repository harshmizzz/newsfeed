import React from "react";
import "./Sidebar.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function Sidebar() {
  const history = useHistory();

  function handleClick1() {
    history.push("/content1");
  }
  function handleClick2() {
    history.push("/content2");
  }

  return (
    <div className="sidebar">
      <div className="items">
        <div className=" card profile">
          <img
            className="img"
            src="https://images.pexels.com/photos/6942385/pexels-photo-6942385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
          <div className="name">
            <strong>Hi, Reader,</strong> <br />
            <p>Here's your news!</p>
          </div>
        </div>
        <div className=" card toggle">
          <h1>View Toggle</h1>
          <div className="toggle-buttons">
            <div className="newsfeed">
              <button className="click" onClick={handleClick2}>
                <img
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-newspaper-3.png"
                  alt=""
                />
              </button>
            </div>
            <div className="listview">
              <button className="click" onClick={handleClick1}>
                <img
                  src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-newspaper-13.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <div className=" card feedback">
          <h1>Have a Feedback?</h1>
          <Link to="/feedback">
          <button className="feedback-button">We're Listening</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
