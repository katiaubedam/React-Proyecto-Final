import { Link } from 'react-router-dom'

function Footer(props) {
    return (
        <footer>
            <div className="footer_content">
                <div className="footer_flex">
                    <div><Link to="/contact">Contacta con nosotros</Link></div>
                    <div className="footer_icons">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
        

                <p>(C) 2022 Katia Úbeda. Chanchullo Games es una simulación de e-commerce con cerca de 200 productos de actualidad
                    en videojuegos, donde puedes probar todas las características básicas que hacen que un e-commerce real funcione.
                </p>
            </div>
        </footer>
    )
}

export default Footer