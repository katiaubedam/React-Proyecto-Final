import { cleanText } from '../tools/tools.js';
import { useState } from 'react'

function ItemFeatures(props) {

    let formattedPrice = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(props.item.price)
    let starStyle = { width: `${props.item.rating * 20}%` }
    let [descriptionHeight, setDescriptionHeight] = useState("120px")
    let [descriptionLabel, setDescriptionLabel] = useState("Ver más...")
    let [descriptionClass, setDescriptionClass] = useState("item_info_description")

    let [infoCartOpacity, setInfoCartOpacity] = useState(0)
    let [buttonBuyEnabled, setButtonBuyEnabled] = useState(true)

    if (props.stock[props.item.id] === undefined) {
        props.stock[props.item.id] = {
            stock: props.item.stock,
            units: 0
        }
    }

    /* PARSER PARA LA DESCRIPCIÓN */

    let parser = new DOMParser();
    const doc = parser.parseFromString(props.item.description, 'text/html');
    let content = doc.getElementsByTagName("div")

    let descArray = []

    if (content.length > 0) {

        if (content[0].children.length > 0) {
            content = content[0].children

            for (let i in content) {
                if (content[i].tagName !== undefined) {

                    let obj = {}
                    if (content[i].tagName === "UL") {

                        obj = {
                            type: content[i].tagName,
                            content: []
                        }

                        for (let j in content[i].children) {
                            if (content[i].children[j].tagName !== undefined) {
                                obj.content[j] = {
                                    type: content[i].children[j].tagName,
                                    content: cleanText(content[i].children[j].innerText)
                                }
                            }
                        }
                    } else {
                        obj = {
                            type: content[i].tagName,
                            content: cleanText(content[i].innerText)
                        }
                    }

                    descArray.push(obj)
                }
            }
        } else {
            descArray.push(content[0].innerHTML)
        }

    } else {
        descArray.push(props.juego.description)
    }

    /* FIN PARSER */

    function toggleDescription() {
        if (descriptionHeight === "120px") {
            setDescriptionHeight("1000px")
            setDescriptionLabel("Ver menos...")
            setDescriptionClass("item_info_description_spread")
        } else {
            setDescriptionHeight("120px")
            setDescriptionLabel("Ver más...")
            setDescriptionClass("item_info_description")
        }
    }

    function addCartItem() {
        if (props.user !== null) {
            props.stock[props.item.id].stock--
            props.stock[props.item.id].units++
            props.stock[props.item.id].name = props.item.name
            props.stock[props.item.id].platform_name = props.item.platform_name
            props.stock[props.item.id].price = props.item.price

            props.setCartCount(props.cartCount + 1)

            setInfoCartOpacity(1)
            setButtonBuyEnabled(false)
            setTimeout(() => {
                setInfoCartOpacity(0);
                if (props.stock[props.item.id].stock > 0) setButtonBuyEnabled(true);
            }, 2000)
        } else {
            props.setLoginModal(true)
        }

    }

    return (
        <>
            <div className="item_info_features">
                <h3>{props.item.name}</h3>
                <div>
                    <span><b>Plataforma:</b> </span>
                    <span>{props.item.platform_name}</span>
                </div>
                <div>
                    <span><b>Calificación:</b> </span>
                    <span className="star-rating">
                        <div className="back-stars">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>

                            <div className="front-stars" style={starStyle}>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                        </div>
                    </span>
                </div>

                <div><p className="item_info_price">{formattedPrice}</p></div>

                <div>
                    {buttonBuyEnabled && props.stock[props.item.id].stock > 0 ?
                        <button onClick={addCartItem}>Añadir al carrito</button>
                        :
                        <button disabled>Añadir al carrito</button>
                    }

                    {props.stock[props.item.id].units > 0 ?
                        <p className="item_in_cart">Tienes {props.stock[props.item.id].units} unidad(es) de este producto añadidas al carrito</p>
                        :
                        <></>}

                    {props.stock[props.item.id] !== undefined ?
                        props.stock[props.item.id].stock === 0 ?
                            <p className="item_no_stock">No queda stock disponible para este producto</p>
                            :
                            <></>
                        :
                        <></>
                    }

                </div>

                <div className="item_info_description_container">
                    <h4 className="item_info_description_title">Descripción del producto:</h4>
                    <div className={descriptionClass} style={{ maxHeight: descriptionHeight }}>
                        {descArray.map((element, i) => {
                            if (element.type) {
                                switch (element.type) {
                                    case "H4":
                                        return <h4>{element.content}</h4>
                                    case "P":
                                        return <p>{element.content}</p>
                                    case "UL":
                                        return (
                                            <ul>{
                                                element.content.map((subElement, i) => {
                                                    return <li>{subElement.content}</li>
                                                })
                                            }</ul>
                                        )
                                    default:
                                        return <div>{element.content}</div>
                                }
                            } else {
                                return <div>{element}</div>
                            }

                        })}
                    </div>
                    <div className="item_info_description_view_more" onClick={toggleDescription}>
                        {descriptionLabel}
                    </div>
                </div>
            </div>

            <div className="item_info_cart_alert" style={
                infoCartOpacity === 0 ?
                    { opacity: 0 }
                    :
                    { opacity: 1 }
            }>
                <p>{props.item.name} ha sido añadido correctamente al carrito</p>
            </div>
        </>
    )
}

export default ItemFeatures