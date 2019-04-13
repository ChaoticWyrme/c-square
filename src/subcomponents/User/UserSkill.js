import React from "react";

export default class UserSkill extends React.Component {
  render() {
    const test = this.props.user.interests;
    return (
      <div className={"userSkill"}>
        Bio
        <p>{this.props.user.bio}</p>
        <br />
        <ul>
          {test.map(item => (
            <h1 key={item}>{item}</h1>
          ))}
        </ul>
      </div>
    );
  }
}
