/**
 * Created by yashw on 07-02-2017.
 */
import React, {Component} from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute}from "react-router";

import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Root} from "./components/Root";
import {User} from "./components/User";
import {HomeNew} from "./components/HomeNew";

class App extends  Component {
    constructor(){
        super();
        this.state = {
            homeLink: "Home"
        }
    }
    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        });
    }

    onGreet(){
        alert("Hello!");
    }

    render(){
        var user = {
            name: "yashu",
            hobbies: ["sports", "reading", "dancing", "movies"]
        };
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Andy"}
                              initialAge={20} user={user}
                              greet={this.onGreet}
                              changeLink={this.onChangeLinkName.bind(this)}
                              initialLink={this.state.homeLink}>
                            <h1>This is child of the Home component</h1>
                        </Home>
                    </div>
                </div>
                <hr/><hr/>
                <Router history={browserHistory}>
                    <Route path={"/"} component={Root}>
                        <IndexRoute component={HomeNew}/>
                        <Route path={"user/:id"} component={User}/>
                        <Route path={"home"} component={HomeNew}/>
                    </Route>
                </Router>
            </div>
        );
    }
}

render(<App/>, document.getElementById("app"));