import { convertURL } from '../tools/tools.js';
import { useParams, Link } from 'react-router-dom'

function Purchase(props) {

    let params = useParams()

    let urlBase = "https://chgames.s3.eu-west-3.amazonaws.com"
    let totalPrice = 0

    return (
        <div className="cart_container">
            <h2>Pedido del {props.cartHistory[params.id].date.toLocaleString("es-ES")}</h2>
            {props.cartHistory[params.id].purchase.map((item, i) => {
                let imgCoverRoute = `${urlBase}/covers/${convertURL(item.platform_name)}/${convertURL(item.name)}.jpg`
                let formattedPrice = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(item.price)
                totalPrice += item.price * item.units
                return(
                    <div className="cart_item_container">
                        <div><img src={imgCoverRoute} alt={item.name} /></div>
                        <div className="cart_item_features">
                            <h3>{item.name}</h3>
                            <p><b>Plataforma:</b> {item.platform_name}</p>
                            <p className="cart_price">{formattedPrice}</p>
                            <p>Unidades: {item.units}</p>
                        </div>
                    </div>
                )
            })}
            <div className="cart_buy_total_price">
                <h3>Total compra: {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(totalPrice)}</h3>
            </div>
            <div className="cart_button_back">
                <Link to="/user"><button>Atrás</button></Link>
            </div>
        </div>
    )
}

export default Purchase