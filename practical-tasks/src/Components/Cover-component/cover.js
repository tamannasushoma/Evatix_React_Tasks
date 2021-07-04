import React from 'react';
import Navbar from '../Nav-component/navbar';
function Cover () {
   
    
        return ( 
            <div>
               
                <div className=" bg-gradient-to-tl from-blue-200 to-blue-700 h-full relative">
              {/* navbar starts */}
                  <Navbar/>
              {/* navbar ends */}

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-2 mt-3 md:mt-5 ">
                    

                        <div className="sm:col-span-1 lg:col-span-3 grid lg:grid-cols-5 sm:text-center md:text-center lg:text-left mt-8 ">
                            <div className=" col-span-0 lg:col-span-1"></div>
                            <div className="lg:col-span-4 ">
                                <p className="text-xs text-white uppercase mb-1">Buisness Workflow</p>
                                <div className="">
                                    <h2 className=" text-white text-3xl font-semibold uppercase mb-2 ">get the most effecient<br/> ui design for your<br/> buisness now!</h2> 
                                    </div>
                                    <div>
                                    <p className="text-base text-white mb-8 mono-poppins">Hire me to design a clean and modern UI for<br/> your business now!</p>
                                    </div>

                                    {/* buttons */}
                                <div className="inline-flex mt-5">
                                    
                                <button className="bg-white hover:bg-blue-100 text-blue-500 text-xs uppercase font-bold py-2 px-4 mr-3 rounded">Hire Me</button>
                                <button className="bg-transparent hover:bg-white text-white hover:text-blue-500 ring-2 ring-white text-xs uppercase font-bold py-2 px-4 rounded">Portfolio</button>
                                </div>
                                </div>
                                
                        </div>

                        <div className="sm:col-span-1 lg:col-span-2 ">
                            <img src="/images/image_02.png" className="ml-36 lg:ml-0 max-w-xs" alt="" />
                        </div>

                    </div>
                        {/* wave image */}
                        <div className="mt-8 h-36 hidden lg:block lg:grid grid-rows-2"></div>
                        <div className=" mt-8">
                            <img src="/images/Shape_02@2x.png" className=" hidden lg:block topMargin absolute" alt="" />
                            <img src="/images/Shape_02@2x.png" className=" block lg:hidden topMarginsm absolute" alt="" />
                            
                        </div>
                        
                </div>
            </div>
         );
    
}
 
export default Cover;