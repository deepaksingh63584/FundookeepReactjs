import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import SignIn from '../src/Component/SignIn';
import Signup from '../src/Component/SignUp';
import Dashboard from '../src/Component/Dashboard';
import ForgatePassword from '../src/Component/ForgatePassword';
import Notes from '../src/Component/Notes';
import Reminder from '../src/Component/Reminder';
import Label from './Component/Label';
import Archive from './Component/Archive';
import Trash from './Component/Trash'


function Routing() {
    return (
        <Router>
            <Route path='/' exact component={SignIn} />
            <Route path='/signup' component={Signup} />
            <Route path='/forgatepassword' component={ForgatePassword} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route path='/dashboard/notes' component={Notes} />
            <Route path='/dashboard/reminder' component={Reminder} />
            <Route path='/dashboard/label' component={Label} />
            <Route path='/dashboard/archive' component={Archive} />
            <Route path='/dashboard/trash' component={Trash} />
        </Router>
    )
}

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('isAuth') ?
            (<Component {...props} />) :
            (<Redirect to={{
                pathname: '/',
            }} />
            )
    )} />
)

export default Routing;