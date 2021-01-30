import react from 'react';
import {Route,Redirect} from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute=({component:Component,task,...rest})=>(
    <Route 
        {...rest}
        render={props=>
            task.isAuthenticate===true?(
                <Component {...props}></Component>
            ):
            (
                <Redirect to="/login"></Redirect>
            )
        }
    />
    )

PrivateRoute.propTypes={
    task:propTypes.object.isRequired
}
const mapStateToProps=state=>({
    task:state.task
})

export default connect(mapStateToProps)(PrivateRoute);

