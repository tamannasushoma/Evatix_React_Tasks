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

            {/* footer */}

                <div className=" flex-wrap relative mt-8  h-48 ">
                    <img src="/images/Shape_05@2x.png" className="hidden md:block lg:block object-fill " alt="" />
                    <img src="/images/Shape_05.png" className="block md:hidden lg:hidden min-h-full" alt="" />
            <div className=" container text-center absolute left-0 top-0 mt-8 lg:custom-margin text-white ">
                        <h1 className="text-xl md:text-3xl font-semibold mb-2 lg:mt-8">Start a Project With Me</h1>
                        <hr className="w-1/5 m-auto"/>
                    <div className="container mt-1">
                            <p>Lets discuss our ideas for presenting your business to the<br/>world in an attractive effective and efficient way</p>

                        </div>
                        <div className="mt-5 lg:mt-8">
                        <button className="bg-white hover:bg-blue-100 text-blue-500 text-xs shadow-lg font-bold py-2 px-7 mr-3 rounded">Hire Me</button>
                        </div>

                    </div>

                </div>
            </div>
         );
    }
}
 
export default Cards;