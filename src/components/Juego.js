import { convertURL } from '../tools/tools.js';
import { Link } from 'react-router-dom'

function Juego(props) {

    let urlBase = "https://chgames.s3.eu-west-3.amazonaws.com"
    let imgCoverRoute = `${urlBase}/covers/${convertURL(props.juego.platform_name)}/${convertURL(props.juego.name)}.jpg`
    let formattedPrice = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(props.juego.price)

    let starStyle = {
        width: `${props.juego.rating*20}%`
    }

    return (
        <Link to={`/item/${props.juego.id}`}>
            <div className="card">
                <div className="card_img_container">
                    <img className="card_img" src={imgCoverRoute} alt={props.juego.name} />
                </div>
                <div className="card_title_container">
                    <h3>{props.juego.name}</h3>
                </div>
                <div><p>{props.juego.platform_name}</p></div>
                
                <div className="star-rating">
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
                </div>    

                <div><p className="card_price">{formattedPrice}</p></div>
            
            </div>
        </Link>
    )
}

export default Juego