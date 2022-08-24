import { useNavigate } from 'react-router-dom'

function Finish(props) {

    window.scrollTo({ top: 0, behavior: 'smooth' })
    let navigate = useNavigate()

    setTimeout(() => {navigate("/")}, 3000)

    return (
        <div className="finish_container">
            <h3>¡Enhorabuena!</h3>
            <p>Tu compra ha sido realizada y te llegará en la mayor brevedad posible :)</p>
        </div>
    )
}

export default Finish