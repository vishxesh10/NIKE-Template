const ItemCard = ({ item }) =>{
    return(
        <div className="card">
            <div className="card-image">
                <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3>{item.title}</h3>
            <h3>Price: ₹{item.price}</h3>
        </div>
    )
}

export default ItemCard;