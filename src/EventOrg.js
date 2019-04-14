import React from 'react';

export default class EventOrg extends React.Component{
    render(){

        const eventItem = this.props.orgs.map((org) => <EOrganization org={org} key={org.id || org.name} />
        );
        return(

            <div className={"orgs"}>
                {eventItem}
            </div>

        )
    }
}

function EOrganization(props) {

    return (
        <div className="ui card" id={"ui"}>
            <div className="image">
                <img src={props.org.companyImage} style={{height:"200px"}}/>

            </div>
            <div className="content" style={{height:"100px"}}>
                <a className="header">{props.org.companyName}</a>
                <div className="meta">
                    <span className="date">{props.org.location}</span>
                    <p>{props.org.missionStatement}</p>
                </div>
            </div>
            <div className="extra content" style={{display:"flex",justifyContent:"center"}}>
                <a href={props.org.donate} ><img src={"/volunteer.png"} style={{height:"40px"}}/></a>
            </div>
        </div>

    )
};