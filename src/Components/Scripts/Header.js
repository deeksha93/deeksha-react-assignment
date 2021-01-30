import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
   
  } from 'reactstrap';

  import {Link} from 'react-router-dom';

export default class Header extends Component {
                        constructor(props){
                            super(props);
                            this.state={
                                isOpen:false,
                            }
                        }

                        toggle=()=>{this.setState({isOpen:!this.state.isOpen})};


    render() {
                const{isOpen}=this.state;

        return (
            <div>
                <Navbar color="dark" light expand="md" fixed="top" >
        <NavbarBrand href="/" className="text-white"><h2>Task</h2></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
            <Link className="nav-link text-white" to="/"> Home</Link>
            </NavItem>
            <NavItem>
            <Link className="nav-link text-white" to="/task"> Tasks</Link>
            </NavItem>
            <NavItem>
            <Link className="nav-link text-white" to="/user"> User</Link>
            </NavItem>
            <NavItem>
            <Link className="nav-link text-white" to="/login"> Login</Link>
            </NavItem>



          </Nav>
         
        </Collapse>
      </Navbar>
            </div>
        )
    }
}


