import React from "react";
import UserName from "./UserName";
import UserImage from "./UserImage";

export default class UserInfo extends React.Component {
  render() {
    const { name, image } = this.props.user;
    return (
      <div className={"userInfo"}>
        <UserImage img={image} />
        <UserName name={name} />
      </div>
    );
  }
}
