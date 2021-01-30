import React, { Component } from 'react';
import {onLogin} from './../Redux/TaskAction';
import {Link,withRouter} from "react-router-dom";
import { connect } from 'react-redux';

class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            user_name:"",
            password:"",
            passwordError:"",
            nameError:"",
            
        }
    }

    onHandleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        if(e.target.name==='user_name'){
            if(e.target.value==="" || e.target.value===null){
              this.setState({
                nameError:true,
              })
            } else {
              this.setState({
               
                nameError:false,
                user_name:e.target.value
                
              })
            }
        }

        
            if(e.target.name==='password' ){
                if(e.target.value===""){
                  this.setState({
                    passwordError:true,
                    password:e.target.value
                  })
                } else {
                  this.setState({
                    passwordError:false,
                    
                  })
                }
     }

}

    _onLogin=()=>{
            if(this.state.user_name===""){
                this.setState({
                    nameError:true,
                   
                })
            }

            if(this.state.password===""){
                this.setState({
                    passwordError:true,
                })
            }
       
        const{user_name,password}=this.state;
        const Data={user_name,password};
        //console.log(Data.user_name);
        this.props.onLogin(Data,this.props.history);
        
    }



    render() {
        const {user_name,password}=this.state;
        return (
            <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 py-3 card mt-5">
                <h1 className="text-info text-center">Login</h1>
               
                    <div className="form-group">
                        <label>UserName:</label>
                        <input type="text" className="form-control" name="user_name" value={user_name}  onChange={this.onHandleChange}></input>
                        {this.state.nameError ? <span style={{color: "red"}}>Please Enter UserName</span> : ''}
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" name="password" value={password}  onChange={this.onHandleChange}></input>
                        {this.state.passwordError ? <span style={{color: "red"}}>Please Enter Password</span> : ''}
                  
                    </div>
                        <div>
                    <button className="btn btn-info mb-3"  onClick={this._onLogin}> Login</button> <br></br>

                    
                
                    </div>

                    


                    </div>
                </div>
                
            </div>
        )
    }
}



export default connect(null,{onLogin})(withRouter(Login));

