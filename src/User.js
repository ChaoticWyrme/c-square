import React from "react";

import {Link} from "react-router-dom";

function User(props) {
  var {image, name} = props.user;

  return (
    <div className={"userComponent"} style={{position:"sticky"}}>
      <div className={"userInfo"}>
      <img src={image} alt={"user"} style={{height:"150px", width:"150px"}}/>
      <h1 className={"userName"}>{name}</h1>
    </div>
      <Navigation />
      {/*<TagList user={props.user} />*/}
    </div>
  );
}

function TagList(props) {
  var interests = props.user.interests.map(tag =><li key={tag}>{tag}</li>)

  var skills = props.user.skills.map(tag => (
    <li key={tag}>{tag}</li>
  ))
  return (
  <div className="userSkill">
    <h3>My Bio</h3>
    <p>{props.user.bio}</p>
    <h3>My Interests</h3>
    <ul>
      {interests}
    </ul>
    <h3>My Skills</h3>
    <ul>
      {skills}
    </ul>
  </div>)
}

function Navigation() {
  return (
      <div class="Navigation">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/volunteer">Volunteer</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default User;