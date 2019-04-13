import React from "react";
import UserInfo from "./UserInfo";
import UserSkill from "./UserSkill";

export default class User extends React.Component {
  render() {
    return (
      <div className={"userComponent"}>
        <UserInfo user={this.props.user} />
        <UserSkill user={this.props.user} />
      </div>
    );
  }
}
