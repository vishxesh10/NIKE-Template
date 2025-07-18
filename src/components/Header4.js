import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort ,  faFilter } from '@fortawesome/free-solid-svg-icons';

const Header4=()=>{
    return(    <div className="header4">
                <div className="header4.1">
                    <h5>Football/Shoes/Studs & Spikes</h5>
                    <h2>Football Studs & Spikes</h2> 
                </div>


                <div className="button">
                    <button id="btn1"><FontAwesomeIcon icon={faFilter} />Filter</button>
                    <button id="btn2"><FontAwesomeIcon icon={faSort} />Sort By</button>
                </div>
            </div> 
       )
}

export default Header4;