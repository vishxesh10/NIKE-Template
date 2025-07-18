const Sidebar=()=>{
    return(
        <div>
            
            
            <div className="SideBar">
                <div className="listify">
                    <ul>
                        <li>Lifestyle</li>
                        <li>Jordan</li>
                        <li>Running</li>
                        <li>Basketbal</li>
                        <li>Training & Gym</li>
                        <li>Football</li>
                        <li>Skateboarding</li>
                        <li>American Football</li>
                        <li>Baseball</li>
                        <li>Golf</li>
                        <li>Nike By you</li>
                        <li>Boots</li>
                        <li>Tennis</li>
                        <li>Athletics</li>
                        <li>Sandals, Slides & Flip Flops</li>
                        
                        <h4>Gender</h4>
                        <ul>
                                <li><input type="checkbox" id="men" /><label htmlFor="men">Men</label></li>
                                <li><input type="checkbox" id="women" /><label htmlFor="women">Women</label></li>
                                <li><input type="checkbox" id="unisex" /><label htmlFor="unisex">Unisex</label></li>
                        </ul>
                        
                        <h4>Kids</h4>
                        <ul>
                                <li><input type="checkbox" id="men" /><label htmlFor="men">Boy</label></li>
                                <li><input type="checkbox" id="women" /><label htmlFor="women">Girl</label></li>
                                
                        </ul>
                        <h4>Shop BY price</h4>
                        <ul>
                                <li><input type="checkbox" id="men" /><label htmlFor="men">Under 25000</label></li>
                                <li><input type="checkbox" id="women" /><label htmlFor="women">Under 15000</label></li>
                                <li><input type="checkbox" id="unisex" /><label htmlFor="unisex">Under 5000</label></li>
                        </ul>
                        <h4>Sale & offers</h4>
                        <ul>
                                <li><input type="checkbox" id="men" /><label htmlFor="men">Sale</label></li>
                                
                        </ul>
                       
                        <h4>Collections</h4>
                        <ul>
                                <li><input type="checkbox" id="men" /><label htmlFor="men">Mercurial</label></li>
                               
                        </ul>
                        <h4>Athletes</h4>
                        <ul>
                                <li><input type="checkbox" id="men" /><label htmlFor="men">Erling Haaland</label></li>
                                <li><input type="checkbox" id="women" /><label htmlFor="women">Vinicius Junior</label></li>
                                <li><input type="checkbox" id="unisex" /><label htmlFor="unisex">David Bechkam</label></li>
                        </ul>
                        <h4>Tier</h4>
                        <ul>
                                <li><input type="checkbox" id="men" /><label htmlFor="men">Elite</label></li>
                               
                        </ul>
                        <li>Shoe Height</li>
                        <ul>
                                <li><input type="checkbox" id="men" /><label htmlFor="men">Low-top</label></li>
                                
                        <li>Surface</li>
                        <ul>
                                <li><input type="checkbox" id="men" /><label htmlFor="men">Firm Ground</label></li>
                                <li><input type="checkbox" id="women" /><label htmlFor="women">Turf</label></li>
                                <li><input type="checkbox" id="unisex" /><label htmlFor="unisex">Futsal</label></li>
                        </ul>
                    </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;