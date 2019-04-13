import React from "react";

export default class UserImage extends React.Component {
  render() {
    console.log(this.props.img);
    return <img src={this.props.img} alt={"user"} />;
  }
}
