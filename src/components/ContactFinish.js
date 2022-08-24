import { useNavigate } from 'react-router-dom'

function ContactFinish(props) {

    window.scrollTo({ top: 0, behavior: 'smooth' })
    let navigate = useNavigate()

    setTimeout(() => {navigate("/")}, 3000)

    return (
        <div className="finish_container">
            <h3>Muchas gracias</h3>
            <p>Tu comentario ha sido enviado y será atendido en la mayor brevedad posible :)</p>
        </div>
    )
}

export default ContactFinish