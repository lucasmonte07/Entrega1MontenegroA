import './ItemListContainer.css'

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
    return (
        <div className="banner">
            <div className="banner-container">
            <div className='greeting'>
                    {greeting}
                </div>
                <h1>Books Shop</h1>
                <p> the best place to find your books</p>
            </div>
        </div>
    )
}

export default ItemListContainer;