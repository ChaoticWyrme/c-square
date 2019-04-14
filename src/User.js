import React from "react";

function User(props) {
  var {image, name} = props.user;

  return (
    <div className={"userComponent"}>
      <div className={"userInfo"}>
      <img src={image} alt={"user"} />
      <h1 className={"userName"}>{name}</h1>
    </div>
      <TagList user={this.props.user} />
    </div>
  );
}

function TagList(props) {
  var interests = props.user.interests.map(tag => {
    <li key={tag}>{tag}</li>
  })

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