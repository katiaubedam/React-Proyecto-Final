import { useState } from 'react'
import axios from 'axios'
import CryptoJS from 'crypto-js';

function LoginModal(props) {

    let [errorLogin, setErrorLogin] = useState("")
    let [inputUser, setInputUser] = useState("")
    let [inputPassword, setInputPassword] = useState("")

    function login() {
        if (inputUser === "" || inputPassword === "") {
            setErrorLogin("¡No dejes los campos vacíos!")
        } else {
            let encPassword = CryptoJS.SHA1(inputPassword).toString()
            props.setLoading(true)
            axios.get(`http://chanchullogames.infinityfreeapp.com/login.php?user=${inputUser}&password=${encPassword}`).then(
                res => {
                    if (res.data.results === null) {
                        setErrorLogin("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.")
                    } else {
                        setErrorLogin("")
                        setInputUser("")
                        setInputPassword("")
                        props.setUser(res.data.results)
                        props.setLoginModal(false)
                    }
                    props.setLoading(false)
                }
            ).catch(function (error) {
                setErrorLogin("Ha ocurrido un error al tratar de conectarse. Por favor, inténtalo de nuevo.")
                props.setLoading(false)
            })
        }
    }

    function closeModal() {
        props.setLoginModal(false)
        setInputUser("")
        setInputPassword("")
    }

    return (
        <div className="login_modal_container" style={
            props.loginModal ?
                {opacity: 1, pointerEvents: "all"}
                :
                {opacity: 0, pointerEvents: "none"}
            }>
            <div className="login_modal">
                <h3>Inicia sesión</h3>
                <div>
                    <input 
                        type="text" 
                        autoFocus
                        onChange={(event) => setInputUser(event.target.value)} 
                        onKeyPress={(event) => {if(event.key === 'Enter') login()}}
                        placeholder="Introduce tu usuario"
                        value={inputUser} 
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        onChange={(event) => setInputPassword(event.target.value)} 
                        onKeyPress={(event) => {if(event.key === 'Enter') login()}}
                        placeholder="Introduce tu contraseña"
                        value={inputPassword} 
                    />
                </div>
                <div className="login_modal_error">
                    <p>{errorLogin}</p>
                </div>
                <div className="login_modal_buttons_container">
                    <button className="button_cancel" onClick={closeModal}>Cancelar</button>
                    <button onClick={login}>Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default LoginModal