
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart ,  faCartShopping } from '@fortawesome/free-solid-svg-icons';



const Header2 = () => {
    return(
        <div className="header2">
            <div className="img2">
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike Logo" />



            </div>
            <div className="categories">
                <div className="Items-category">
                    <ul>
                        <li>New & Featured</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Sale</li>
                    </ul>
                </div>

            </div>
            <div className="search-nav">
            <input
                type="text"
                placeholder="Search..."
            />
            <ul>
                <li><button><FontAwesomeIcon icon={faHeart} /></button></li>
                <li><button><FontAwesomeIcon icon={faCartShopping} /></button></li>
            </ul>
            </div>
                
        </div>  

          
    )
}

export default Header2;