import React from 'react';

export default class OrgInfo extends React.Component{
    render(){

        const {companyImage, companyName, missionStatement, neededSkills} = this.props.org;
        return(
            <>
            <img src = {this.props.org.companyImage}/>
            <h1 className={"companyName"}>{this.props.org.companyName}</h1>
                <br/>
                <h2>Our Mission...</h2>
            <h3 className={"missionStatement"}>{this.props.org.missionStatement}</h3>
                <br/>
                <h3>Desired Skills</h3>
                <ul>
                    {this.props.org.neededSkills.map((skill,i) => <li key={i}>{skill}</li>)}
                </ul>
                <br/>

            </>
        );
    }
}