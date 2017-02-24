/**
 * Created by yashw on 08-02-2017.
 */
import React, {Component} from "react";
import {Link} from "react-router";

export const Footer = ()=>{
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"} activeStyle={{color: "red"}}>Home</Link></li>
                        <li><Link to={"/user/8"} activeClassName={"active"}>User</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}