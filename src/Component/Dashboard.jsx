import React, { Component } from 'react';
import Navbar from './Navbar';

class Dashboard extends Component {
    // constructor(props){
    //     super(props);
      
    // }
    render() {
        return (
           
            <div>
                <Navbar DashboardProps={this.props} />
            </div>
        );
    }
}
export default Dashboard;