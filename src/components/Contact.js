import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Contact(props) {

    let navigate = useNavigate()
    let [inputEmail, setInputEmail] = useState("")
    let [inputText, setInputText] = useState("")

    /* Esto es una chapuza como un piano, lo sé (pero funciona) */
    function send() {
        axios.get(`http://chanchullogames.infinityfreeapp.com/contact.php?email=${inputEmail}&body=${inputText}`).then(
            res => {
                navigate("/contactFinish")
            }
        )
    }

    return (
        <div className="contact_container">
            <h3>¡Contacta con nosotros!</h3>
            <p>¿Tienes algo que comentar, ya sean elogios, aspectos a mejorar, o donaciones anónimas? 
                ¡Usa nuestro formulario! Nuestro personal se pondrá en contacto contigo en la mayor brevedad posible. </p>

            <div>
                <input type="email" placeholder="Indica tu correo" onChange={(event) => {setInputEmail(event.target.value)}} value={inputEmail} />
            </div>
            <div>
                <textarea onChange={(event) => {setInputText(event.target.value)}} value={inputText}></textarea>
            </div>

            <button onClick={send}>Enviar</button>
        </div>
    )
}

export default Contact