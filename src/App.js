
import './App.css';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import Header from './Components/Scripts/Header';
import store from './store';
import {Provider} from 'react-redux';
import Tasks from './Components/Scripts/Tasks';
import Home from './Components/Scripts/Home';
import Login from './Components/Scripts/Login';
import User from './Components/Scripts/User';
import ChangePassword from './Components/Scripts/ChangePassword';
import PrivateRoute from './Components/reUsable/PrivateRoute';


const token=localStorage.getItem("userData");
function App() {
  
  






  return (
    <div>
       <Provider store={store}>
        <Router>
          <Header/>
          
    
         <PrivateRoute exact path="/" component={Home}/>
         <PrivateRoute exact path="/task" component={Tasks}/>
          <PrivateRoute exact path="/user" component={User}/>
          <PrivateRoute exact path="/new_password" component={ChangePassword}/>
          
          <Route exact path="/login" component={Login}/>

        </Router>
        </Provider>
    </div>
  );
}

export default App;
