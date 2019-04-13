import React from 'react';
import OrgInfo from './OrgInfo';


export default class Orgs extends React.Component{
    render(){
        const orgs = this.props.orgs;
        return(
            <div className={"orgs"}>{orgs.map((org,i) => <OrgInfo org={org} key={i}/>)}</div>
        )
    }
}