import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ChangePassword extends Component {
            constructor(props){
                super(props);
                this.state={
                    password:"",
                }
            }

            onHandleChange=(e)=>{
                this.setState({
                    [e.target.name]:e.target.value
                })
            }

            onSavePasswd=()=>{
                const token=JSON.parse(localStorage.getItem("userData"));
                const{password}=this.state;
                const data={
                    user_name:token.user_name,
                    password:this.state.password,
                    
                }
                console.log(data);
                localStorage.setItem("userData", JSON.stringify(data));
                this.props.history.push("/tasks");
            }

            onLogOut=()=>{
                localStorage.removeItem('userData'); 
                this.props.history.push("/login");
            }


    render() {
            const {password}=this.state;
        const token=JSON.parse(localStorage.getItem("userData"));
        console.log(token);
        return (
            <div className="container mt-5 pt-5">

            <div className="row p-3">
                <div className="col-md-2">
                    UserName:
                </div>
                <div className="col-md-2">
                    {token.user_name}
                </div>
            </div>

            <div className="row p-3">
                <div className="col-md-2">
                   New Password:
                </div>
                <div className="col-md-2">
                   <input type="text" name="password" value={password} onChange={this.onHandleChange}/>

                </div>
            </div>

            <div className="row p-3">
                <div className="col-md-2">
                <button className="border-0 rounded p-2 bg-warning"onClick={this.onSavePasswd} >Save Password</button>
                </div>
                <div className="col-md-2">
                   <button className="border-0 rounded p-2 bg-danger" onClick={this.onLogOut}>LogOut</button>
                </div>
            </div>
            
        </div>
        )
    }
}
