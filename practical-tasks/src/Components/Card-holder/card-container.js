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

                <div className="   relative mt-8">
                    <img src="/images/Shape_05@2x.png" className="" alt="" />
                    <div className=" text-center absolute custom-margin text-white ">
                        <h1 className="text-3xl font-semibold mb-2">Start a Project With Me</h1>
                        <hr/>
                        <div className="mt-8">
                            <p>Lets discuss our ideas for presenting your business to the<br/>world in an attractive effective and efficient way</p>

                        </div>
                        <div className="mt-5 ">
                        <button className="bg-white hover:bg-blue-100 text-blue-500 text-xs shadow-lg font-bold py-2 px-7 mr-3 rounded">Hire Me</button>
                        </div>

                    </div>

                </div>
            </div>
         );
    }
}
 
export default Cards;