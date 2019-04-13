import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Events from "./Events";
import Volunteer from "./Volunteer";
import User from "./subcomponents/User/User";
import Orgs from "./subcomponents/Orgs/Orgs";

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
      <Orgs orgs={orgs}/>
    </div>
  );
}

const user = {
  name: "Damian Barrous",
  image: "https://via.placeholder.com/150",
  bio: "Hey I'm Damian, I'm cool!",
  interests: ["swimming", "dancing", "coding", "breathing", "laughing"],
  skills: ["html", "html2", "Assembly", "memes"]
};

const orgs = [{
    companyImage: "https://via.placeholder.com/300",
    companyName:"Non-Profit",
    missionStatement:"We help people",
    neededSkills:["Helpful People","JS"]
},{
    companyImage: "https://via.placeholder.com/300",
    companyName:"Non-Non-Profit",
    missionStatement:"We Don't people",
    neededSkills:["Not Helpful People","noJS","PHP"]
}];
export default App;
