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
                <div className="">
                    <h1 className=" text-xl lg:text-3xl font-bold pt-8 lg:pt-20 text-blue-500">Packages</h1>
                    <hr className="bg-blue-500 w-1/5 m-auto h-1 mt-2"/>
                
            <div className="flex flex-wrap object-cover inline-flex mx-auto mt-2 ">
            <Card/>
            <Card/>
            <Card/>
            </div>
            </div>
        </div>
         );
    }
}
 
export default Cards;