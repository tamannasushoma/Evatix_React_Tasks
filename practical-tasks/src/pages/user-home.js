import axios from 'axios';
import React, { Component } from 'react';

class UserHome  extends Component {
    componentDidMount() {
       
        axios.get('user', config).then(
            res =>{
                console.log
            }
        )
    }
    render() { 
        return ( 
            <div>
                <h1>welcome</h1>
            </div>
         );
    }
}
 
export  default UserHome ;