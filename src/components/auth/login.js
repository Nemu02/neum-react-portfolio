import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class LogIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            errorText: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // console.log("Handle change", event);
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
          });
    }

    handleSubmit(event) {
        axios.post("https://api.devcamp.space/sessions", 
        {
            client: {
                email: this.state.email,
                password: this.state.password
            },

        },
        { withCredentials: true }
        ).then(response => {
            if (response.data.status === "created") {
                this.setState ({
                    errorText: "You shall PAss"
                });
                this.props.handleSuccessfulAuth();
            } else {
                this.setState ({
                    errorText: "Thou Shall Not Pass! Check email/password"
                });
                this.props.handleUnSuccessfulAuth();
            }
        }).catch(error => {
            console.log("Error", error),
            this.setState ({
                errorText: "Server Down"
            });


        });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

                <div><h6>{this.state.errorText}</h6></div>

                <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
                    <div className="form-group">
                        <FontAwesomeIcon icon="envelope" />
                    
                        <input 
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>

                <div className="form-group">
                    <FontAwesomeIcon icon="lock" />
                    <input 
                    type="password" 
                    name="password"
                    placeholder="Your Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                </div>

                    <div>
                        <button className="btn" type="submit">LogIn</button>
                    </div>
                </form>
            </div>
        )
    }
}