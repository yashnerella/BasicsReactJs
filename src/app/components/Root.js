/**
 * Created by yashw on 08-02-2017.
 */
import React, {Component} from "react";

import {Footer} from "./Footer";

export class Root extends Component{

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Footer/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}