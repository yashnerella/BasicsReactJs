/**
 * Created by yashw on 08-02-2017.
 */
import React, {Component} from "react";
import {browserHistory} from "react-router";

export class User extends Component{
    onNavigateHome(){
        browserHistory.push("/home");
    }
    render(){
        return(
            <div>
                <h3>The User Page - </h3>
                <p>User ID: {this.props.params.id}</p>
                <button className="btn btn-primary" onClick={this.onNavigateHome.bind(this)}>Go New Home!!</button>
            </div>
        );
    }
}