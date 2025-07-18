import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import Header2 from "./src/components/Header2";
import Header3 from "./src/components/Header3";
import Body from "./src/components/Body";
import Header4 from "./src/components/Header4";





const AppLayout = () =>{
    return(
        <div>

        <Header/>
        <Header2/>
        <Header3/>
        <Header4/>
       
        <Body/>
        
        
       
        
        </div>

        

    );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);