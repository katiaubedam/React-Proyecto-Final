import NavItem from "./NavItem"
import NavItemExpandable from "./NavItemExpandable"

import { Link } from 'react-router-dom'

function NavMenu(props) {
    return (
        <nav style={{width: props.menuDisplay}}>
            <ul>
                <NavItem 
                    name="Home" 
                    setUrl={props.setUrl} 
                    url="http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/search.php?term=" 
                    setMenuDisplay={props.setMenuDisplay} 
                    setLoadingActive={props.setLoadingActive}
                />
                <NavItem 
                    name="Todos los juegos"
                    setUrl={props.setUrl} 
                    url="http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/games.php" 
                    setMenuDisplay={props.setMenuDisplay}
                    setLoadingActive={props.setLoadingActive}
                />
                <NavItem 
                    name="Todas las consolas" 
                    setUrl={props.setUrl} 
                    url="http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/consoles.php" 
                    setMenuDisplay={props.setMenuDisplay}  
                    setLoadingActive={props.setLoadingActive}
                />
                <NavItem 
                    name="Todos los accesorios" 
                    setUrl={props.setUrl} 
                    url="http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/accesories.php" 
                    setMenuDisplay={props.setMenuDisplay}  
                    setLoadingActive={props.setLoadingActive}
                />
                <NavItemExpandable 
                    name="Nintendo Switch" 
                    setUrl={props.setUrl} 
                    setMenuDisplay={props.setMenuDisplay} 
                    setLoadingActive={props.setLoadingActive}
                    subItems={[
                        {name: "Juegos", url: "http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/games.php?platform=2"},
                        {name: "Consolas", url: "http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/consoles.php?platform=2"},
                        {name: "Accesorios", url: "http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/accesories.php?platform=2"}
                    ]} 
                />
                <NavItemExpandable 
                    name="PlayStation 4" 
                    setUrl={props.setUrl} 
                    setMenuDisplay={props.setMenuDisplay} 
                    setLoadingActive={props.setLoadingActive}
                    subItems={[
                        {name: "Juegos", url: "http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/games.php?platform=3"},
                        {name: "Consolas", url: "http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/consoles.php?platform=3"},
                        {name: "Accesorios", url: "http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/accesories.php?platform=3"}
                    ]} 
                />
                <NavItemExpandable 
                    name="Xbox One" 
                    setUrl={props.setUrl} 
                    setMenuDisplay={props.setMenuDisplay} 
                    setLoadingActive={props.setLoadingActive}
                    subItems={[
                        {name: "Juegos", url: "http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/games.php?platform=4"},
                        {name: "Consolas", url: "http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/consoles.php?platform=4"},
                        {name: "Accesorios", url: "http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/accesories.php?platform=4"}
                    ]} 
                />
                <NavItemExpandable 
                    name="PlayStation 5" 
                    setUrl={props.setUrl} 
                    setMenuDisplay={props.setMenuDisplay} 
                    setLoadingActive={props.setLoadingActive}
                    subItems={[
                        {name: "Juegos", url: "http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/games.php?platform=5"},
                        {name: "Consolas", url: "http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/consoles.php?platform=5"},
                        {name: "Accesorios", url: "http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/accesories.php?platform=5"}
                    ]} 
                />
                <NavItemExpandable 
                    name="Xbox Series" 
                    setUrl={props.setUrl} 
                    setMenuDisplay={props.setMenuDisplay} 
                    setLoadingActive={props.setLoadingActive}
                    subItems={[
                        {name: "Juegos", url: "http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/games.php?platform=6"},
                        {name: "Consolas", url: "http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/consoles.php?platform=6"},
                        {name: "Accesorios", url: "http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/accesories.php?platform=6"}
                    ]} 
                />
                <Link to="/contact">
                    <li><div className="nav_item" onClick={() => {props.setMenuDisplay("0px")}}>Contacta con nosotros</div></li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavMenu