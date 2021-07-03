import React, { Component } from "react";

class Card extends Component {
 
  render() {
    return (
      <div>
        <div className="max-w-xs py-3 px-6 bg-white shadow-md rounded-lg my-20 ml-4 mr-4">
          <div>
          <h2 className="text-gray-800 text-xl text-left text-blue-600 font-normal  mb-2">Business Work Flow</h2>
            <h2 className="text-gray-800 text-2xl text-left font-semibold">Plurality</h2>
            <p className="mt-2 text-left leading-tight text-sm text-gray-600">
              This package will suit you if u want a sing page simple website for your product.It will cover only one web UI. U can revise the 
              design 2 times after the initial draft discussion session...
            </p>
          </div>
          <div className="flex justify-start mt-4">
          <button className="bg-gradient-to-tl from-blue-300 to-blue-600 hover:bg-blue-600 text-white text-md font-light py-1 px-6 mr-3 mb-2 rounded">See More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
