import { useNavigate, Link } from 'react-router-dom'

function Header(props) {

    let navigate = useNavigate()

    function toggleMenu (){
        if (props.menuDisplay === "0px") {
            props.setMenuDisplay("400px")
        } else {
            props.setMenuDisplay("0px")
        }
    }

    function toggleLoginModal(){
        if (props.user !== null) {
            navigate("/user")
        } else {
            props.setLoginModal(true)
        }
    }

    function toggleCart() {
        if (props.user !== null) {
            navigate("/cart")
        } else {
            props.setLoginModal(true)
        }
    }

    return (
        <header>
            <div className="header_left">
                <div className="header_menu" title="Menú" onClick={toggleMenu}>
                    <i className="fa fa-bars"></i>
                </div>
                <Link to="/"><h1 className="header_title">Chanchullo Games</h1></Link>
            </div>
            <div className="header_right">
                <div className="header_right_item" onClick={toggleCart}>
                    {props.cartCount > 0 ?
                        <div className="header_notification"><div>{props.cartCount}</div></div>
                        :
                        <></>
                    }
                    <i className="fa fa-basket-shopping header_icon"></i>
                    <p>Carrito</p>
                </div>
                <div className="header_right_item" onClick={toggleLoginModal}>
                    <i className="fa fa-user header_icon"></i>
                    {props.user !== null ?
                        <p>Hola, {props.user.name}</p>
                        :
                        <p>Inicia Sesión</p>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header