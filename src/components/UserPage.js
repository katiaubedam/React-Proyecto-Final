import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'

function UserPage(props) {

    let navigate = useNavigate()

    function closeSesssion() {
        props.setUser(null)
        props.setStock([])
        props.setCartHistory([])
        props.setCartCount(0)
        navigate("/")
    }

    useEffect(() => {
        if (props.user === null) navigate("/")
    }, [])

    return (
        <div className="user_page_container">
        {props.user !== null ?
            <>
                <h3>Área de usuario</h3>
                <div>
                    <p>Nombre: {props.user.name}</p>
                    <p>Apellidos: {props.user.lastname}</p>
                    <p>Correo: {props.user.email}</p>
                    <p>Dirección: {props.user.address}</p>
                </div>
                </>
            :
            <></>
        }
        {props.user !== null && props.cartHistory && props.cartHistory.length > 0 ?
            <div className="user_history_container">
                <h3>Historial de compras</h3>
                {props.cartHistory.map((purchase, i) => {
                    return (
                        <div>
                            <Link to={`/purchase/${i}`}><p>{purchase.date.toLocaleString("es-ES")}</p></Link>
                        </div>
                    )
                })}
            </div>
            :
            <></>
        }
        {props.user !== null ?
            <div className="user_page_container_button">
                <button onClick={closeSesssion}>Cerrar Sesión</button>
            </div>
            :
            <></>
        }
        </div>
    )
}

export default UserPage