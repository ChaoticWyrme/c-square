import React from "react";

export default class UserImage extends React.Component {
  render() {
    return <img src={this.props.img} alt={"user"} />;
  }
}
