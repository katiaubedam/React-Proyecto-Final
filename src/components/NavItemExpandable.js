import { useState } from 'react'
import { Link } from 'react-router-dom'

function NavItemExpandable(props) {

    let [height, setHeight] = useState("0px")

    function toggleSubMenu() {
        if (height === "0px") {
            setHeight("120px")
        } else {
            setHeight("0px")
        }
    }

    function pagination(page) {
        props.setLoadingActive(true)
        props.setUrl(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        props.setMenuDisplay("0px")
    }

    return (
        <li>
            <div className="nav_item nav_item_expandable" onClick={toggleSubMenu}>
                <div>{props.name}</div>
                <div className="fa fa-angle-right"></div>
            </div>
            <div className="nav_submenu" style={{maxHeight: height}}>
                <ul>
                    {props.subItems.map((item, i) => {
                        return <Link to="/"><li onClick={() => {pagination(item.url)}}>{item.name}</li></Link>
                    })}
                </ul>
            </div>
        </li>
    )
}

export default NavItemExpandable