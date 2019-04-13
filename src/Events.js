import React, { Component } from "react";
import "./Events.css";

class Events extends Component {
  render() {
    return (
      <div>
        <Event />
      </div>
    );
  }
}

class Event extends Component {
  render() {
    return (
      <div>
        <h4>{this.title}</h4>
      </div>
    );
  }
}

export default Events;
