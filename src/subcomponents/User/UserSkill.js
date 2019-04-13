import React from "react";

export default class UserSkill extends React.Component {
  render() {
    const interests = this.props.user.interests;
    const skills = this.props.user.skills;
    return (
      <div className={"userSkill"}>
        <h3>My Bio</h3>
        <p>{this.props.user.bio}</p>
        <br />
        <h3>My Interests</h3>
        <ul>
          {interests.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <br />
        <h3>My Skills</h3>
        <ul>
          {skills.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
