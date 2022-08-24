import { Link } from 'react-router-dom'

function NavItem(props) {

    function pagination(page) {
        props.setLoadingActive(true)
        props.setUrl(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        props.setMenuDisplay("0px")
    }

    return (
        <Link to="/">
            <li><div className="nav_item" onClick={() =>{pagination(props.url)}}>{props.name}</div></li>
        </Link>
    )
}

export default NavItem