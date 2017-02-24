/**
 * Created by yashw on 07-02-2017.
 */
import React, {Component} from "react";

export class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLink
        }
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    _handleLinkChange(event){
        this.setState({
           homeLink: event.target.value
        });
    }

    render(){
        return(
            <div>
                <h1>Your name is: {this.props.name} Your age is: {this.state.age} Status: {this.state.status}</h1>
                <h4>User name: {this.props.user.name}</h4>
                <h3>User hobbies: </h3>
                <ul>{this.props.user.hobbies.map((hobby, i)=> <li key={i}>{hobby}</li>)}</ul>
                <hr/>
                {this.props.children}
                <hr/>
                <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me Older!</button>
                <hr/>
                <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={this._handleLinkChange.bind(this)}/>
                <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initalAge: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired,
    greet: React.PropTypes.func
}