import React from 'react';

function Button({Textcolor, children, onClick, styleName}){
    return(
        <div className="">
            <button className={{styleName}}  onClick={onClick} style={
                {
                    backgroundColor:Textcolor, 
                    color: "white",
                    // outline: "none",
                    border:"none",
                    borderRadius: "5px",
                    padding:".5rem 1.5rem",
                    fontSize:"20px",
                    margin:"5px"

                }
                }>
                {children}
            </button>
        </div>
    )
}
export default Button;