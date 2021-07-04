import React, { Component } from 'react';
import Card from '../Card/card';
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <div className="flex flex-wrap object-cover inline-flex mx-auto mt-8 ">

            <Card/>
            <Card/>
            <Card/>
            </div>

            </div>
         );
    }
}
 
export default Cards;