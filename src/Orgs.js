import React from 'react';

export default class Orgs extends React.Component{
  render(){
    const orgs = this.props.orgs.map((org, i) => {
      <OrgInfo org={org} key={org.id || org.name} />
    });
    return(
      <div className={"orgs"}>
        {orgs.map((org,i) => <Organization org={org} key={i}/>)}
      </div>
      )
  }
}

function Organization(props) {
  return (
  <div>
    <img src={props.org.companyImage} alt={props.org.companyName}/>
    <h1 className="companyName">{props.org.companyName}</h1>
      <p className="location">{props.org.location}</p>
      <h2>Our Mission...</h2>
    <h3 className="missionStatement">{props.org.missionStatement}</h3>
      <h3>Desired Skills</h3>
      <ul>
        {props.org.neededSkills.map((skill,i) => <li key={i}>{skill}</li>)}
      </ul>
      <div className={"orgsContact"}>
            <a href={props.donate}>Donate</a>
            <a href={props.donate}>Volunteer</a>
            <a href={props.donate}>Share</a>
        </div>

  </div>)
}