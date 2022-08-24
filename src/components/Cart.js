import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import CartItem from './CartItem'

function Cart(props) {

    window.scrollTo({ top: 0, behavior: 'smooth' })
    let navigate = useNavigate()
    let totalPrice = 0

    function finish() {

        /* Primero recorremos los juegos añadidos a la cesta y los copiamos a un array de pedidos */

        let items = []

        props.stock.map((item, i) => {
            if (item !== undefined && item.units > 0) {
                items.push({
                    name: item.name,
                    platform_name: item.platform_name,
                    units: item.units,
                    price: item.price
                })
            }
        })

        let purchase = [...props.cartHistory]
        purchase.push({
            date: new Date(),
            purchase: items
        })

        props.setCartHistory(purchase)

        /* Ahora, reiniciamos el contador de juegos añadidos, para que se refleje en el stock */

        let stock = [...props.stock]

        for (let i = 0; i < stock.length; i++) {
            if (stock[i] !== undefined && stock[i].units > 0) {
                stock[i].units = 0
            }
        }

        props.setStock(stock)

        props.setCartCount(0)
        navigate("/finish")
    }

    useEffect(() => {
        if (props.user === null) navigate("/")
    }, [])


    return (
        props.user !== null ?
            <div className="cart_container">
                <h2>Carrito de {props.user.name}</h2>
                {props.cartCount > 0 ?
                    props.stock.map((item, i) => {
                        if (item !== undefined && item.units > 0) {
                            totalPrice += item.price * item.units
                            return (
                                <CartItem
                                    item={item}
                                    stock={props.stock}
                                    setStock={props.setStock}
                                    cartCount={props.cartCount}
                                    setCartCount={props.setCartCount}
                                />)
                        }
                    })
                    :
                    <div className="cart_empty">
                        <h3>Parece que todavía no has añadido ningún artículo a tu carrito... :) ¡Elige <Link to="/">cualquiera de nuestros artículos disponibles</Link> y empieza a llenarlo!</h3>
                    </div>
                }

                {props.cartCount > 0 ?
                    <>
                        <div className="cart_buy_total_price">
                            <h3>Total compra: {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(totalPrice)}</h3>
                        </div>
                        <div className="cart_buy_button">
                            <button onClick={finish}>Terminar Compra</button>
                        </div>
                    </>
                    :
                    <></>
                }


            </div>
            :
            <></>


    )
}

export default Cart