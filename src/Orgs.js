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

  return (
      <div className="ui card" id={"ui"}>
          <div className="image">
              <img src={props.org.companyImage} style={{height:"200px"}}/>

          </div>
          <div className="content" style={{height:"200px"}}>
              <a className="header">{props.org.companyName}</a>
              <div className="meta">
                  <span className="date">{props.org.location}</span>
              </div>
              <div className="description">
                  {props.org.missionStatement}
              </div>
          </div>
          <div  className={"content"} style={{position:"flex", marginTop:"25px"}}>
              {props.org.neededSkills.map((item,key)=><img src={`/${item}.png`} key={key} style={{height:"45px", marginLeft:"10px"}}/>)}
          </div>

          <div className="extra content">
              <a href={props.org.donate} ><img src={"/donate.png"} style={{height:"28px"}}/></a>
              <a href={props.org.donate} ><img src={"/volunteer.png"} style={{height:"28px"}}/></a>
              <a href={props.org.donate} ><img src={"/share.png"} style={{height:"28px"}}/></a>
          </div>
      </div>

)
};












