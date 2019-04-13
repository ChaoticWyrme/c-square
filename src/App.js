import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Events from "./Events";
import Volunteer from "./Volunteer";
import User from "./subcomponents/User/User";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/volunteer" component={Volunteer} />
      </Router>
    );
  }
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

function Home() {
  return (
    <div>
      <User user={user} />
    </div>
  );
}

const user = {
  name: "damian barrous",
  image: "https://via.placeholder.com/150",
  bio: "Hey I'm Damian, I'm cool!",
  interests: ["swimming", "dancing", "coding"],
  skills: ["html", "html2", "Assembly"]
};
export default App;
