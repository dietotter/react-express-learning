import React from 'react'

import AuthenticationService from '../services/AuthenticationService'

export default class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    register(){
        AuthenticationService.register({
            email: this.state.email,
            password: this.state.password
        }).then((response) => console.log(response.data))
            .catch((err) => console.log(err))

    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){

        return (
            <div style={{textAlign: 'center'}}>
                <h1>Register {this.state.email} {this.state.password}</h1>
                <input type="email" name="email" placeholder="email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
                <br />
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
                <br />
                <button onClick={this.register.bind(this)}>Register</button>
            </div>
        )
    }
}


// ANOTHER VARIANT TO GET INPUT VALUES ON BUTTON CLICK (no need in value={...}, onChange() and state):
// (THIS IS CALLED UNCONTROLLED ELEMENTS. WHAT I AM USING WITH STATE AND onChange IS CALLED CONTROLLED ELEMENTS)
// (UNCONTROLLED ELEMENTS DATA IS HANDLED BY THE DOM ITSELF, CONTROLLED COMPONENT - BY REACT)
// 1) to <input type="email" ... ref={(em) => this.em = em} />
// 2) to <input type="password" ... ref={(pwd) => this.pwd = pwd} />
// 3)
// register(){
//     AuthenticationService.register({
//         email: this.em.value,
//         password: this.pwd.value
//     }).then((response) => console.log(response.data))
//         .catch((err) => console.log(err))
// }
// ========== OR ===========
// 1) to <input type="email" ... ref="em" />
// 2) to <input type="password" ... ref="pwd" />
// 3)
// register(){
//     AuthenticationService.register({
//         email: this.refs.em.value,
//         password: this.refs.pwd.value
//     }).then((response) => console.log(response.data))
//         .catch((err) => console.log(err))
// }