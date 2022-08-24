import { convertURL } from '../tools/tools.js';

function CartItem(props) {

    let urlBase = "https://chgames.s3.eu-west-3.amazonaws.com"
    let imgCoverRoute = `${urlBase}/covers/${convertURL(props.item.platform_name)}/${convertURL(props.item.name)}.jpg`
    let formattedPrice = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(props.item.price)

    function deleteItem() {
        let tempItem = props.item
        tempItem.units--
        tempItem.stock++
        let tempStock = [...props.stock]
        tempStock[props.item.id] = tempItem
        props.setStock(tempStock)

        props.setCartCount(props.cartCount - 1)
    }

    return (
        <div className="cart_item_container">
            <div><img src={imgCoverRoute} alt={props.item.name} /></div>
            <div className="cart_item_features">
                <h3>{props.item.name}</h3>
                <p><b>Plataforma:</b> {props.item.platform_name}</p>
                <p className="cart_price">{formattedPrice}</p>
                <p>Unidades: {props.item.units}</p>
            </div>
            <div className="cart_trash">
                <button onClick={deleteItem}><i className="fa fa-trash" aria-hidden="true"></i><span> Eliminar</span></button>
            </div>
            
        </div>
    )
}

export default CartItem