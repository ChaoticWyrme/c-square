import React from 'react';
import OrgsContact from "./OrgsContact";


export default class OrgInfo extends React.Component{
    render(){

        return(
            <>
            <img src = {this.props.org.companyImage} alt={this.props.org.companyName}/>
            <h1 className={"companyName"}>{this.props.org.companyName}</h1>
                <p className={"location"}>{this.props.org.location}</p>
                <br/>
                <h2>Our Mission...</h2>
            <h3 className={"missionStatement"}>{this.props.org.missionStatement}</h3>
                <br/>
                <h3>Desired Skills</h3>
                <ul>
                    {this.props.org.neededSkills.map((skill,i) => <li key={i}>{skill}</li>)}
                </ul>
                <br/>
                <OrgsContact donate={this.props.org.donate}/>
                <br/>

            </>
        );
    }
}