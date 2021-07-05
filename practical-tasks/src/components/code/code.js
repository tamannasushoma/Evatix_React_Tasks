import React from 'react';

function Code({Font, children, styleName}){
    return(
        <>
           <code className={{styleName}}
                 style={{
                    fontFamily: `Consolas,"courier new"`,
                    color: "black",
                    backgroundColor: "#F4F5F7",
                    padding: "1px",
                    fontSize: Font,
                    
                 }}
           >
               {children}
           </code>
       </>
    )
}
export default Code;