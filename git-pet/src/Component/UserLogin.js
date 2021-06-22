import React, { Component } from "react";

export default class UserLogin extends Component {

    handleRegister = () => {
        this.props.history.push("/signup")
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                    type="text"
                    name="username"
                    value=""
                    placeholder="Enter your username"/>
                    <br/>
                    <input 
                    type="password"
                    name="password"
                    value=""
                    placeholder="Enter your passwords"/>
                    <br/>
                    <button> Login </button>
                </form>
                <button onClick={() => this.handleRegister()}>Signup</button>
            </div>
        )
    }
}