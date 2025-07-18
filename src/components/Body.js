import ItemCard from "./ItemCard"
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import mockdata from "./mockdata";

const Body=()=>{
    const [nikeData, setnikeData] = useState([]);

    useEffect(() => {
        setnikeData(mockdata);
        console.log("Mock Data:", mockdata);
    }, []);

    return(
        <div className="bodyContainer"> 
            <Sidebar/>
            <div className="itemCardsContainer">
                {nikeData.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Body;