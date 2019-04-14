import React from 'react';

export default class OrgsContact extends React.Component{


    render(){
    return(
        <div className={"orgsContact"}>
            <a href={this.props.donate}>Donate</a>
            <a href={this.props.donate}>Volunteer</a>
            <a href={this.props.donate}>Share</a>
        </div>

    );
}
}