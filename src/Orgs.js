import React from 'react';

export default class Orgs extends React.Component{
  render(){

    const orgs = this.props.orgs.map((org) => <Organization org={org} key={org.id || org.name} />
    );
    return(
      <div className={"orgs"}>
        {orgs}
      </div>
      )
  }
}

function Organization(props) {
  console.log(props);
  return (
      <div className="ui card" id={"ui"}>
          <div className="image">
              <img src={props.org.companyImage} style={{height:"200px"}}/>

          </div>
          <div className="content" style={{height:"300px"}}>
              <a className="header">{props.org.companyName}</a>
              <div className="meta">
                  <span className="date">{props.org.location}</span>
              </div>
              <div className="description">
                  {props.org.missionStatement}
                  {props.org.neededSkills.map((skill,i) => <li key={i}>{skill}</li>)}
              </div>

          </div>
          <div className="extra content">
              <a href={props.donate}>Donate</a>
              <a href={props.donate}>Volunteer</a>
              <a href={props.donate}>Share</a>
          </div>
      </div>

)
};












