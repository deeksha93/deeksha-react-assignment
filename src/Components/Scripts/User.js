import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class User extends Component {


        onLogOut=()=>{
            localStorage.removeItem('userData'); 
            this.props.history.push("/login");
        }


    render() {
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
                        Password:
                    </div>
                    <div className="col-md-2">
                        *******
                    </div>
                </div>

                <div className="row p-3">
                    <div className="col-md-2">
                   <Link to="/new_password"> <button className="border-0 rounded p-2 bg-primary" >Change Password</button></Link>
                    </div>
                    <div className="col-md-2">
                       <button className="border-0 rounded p-2 bg-danger" onClick={this.onLogOut}>LogOut</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
