import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Searchbar(props) {

    let navigate = useNavigate()
    let [inputSearch, setInputSearch] = useState("")

    function search(event) {
        if(event.key === 'Enter'){
            props.setSearchTerm(event.target.value)
            setInputSearch("")
            navigate("/")
        }
    }

    return (
        <div className="searchbar_container">
            <div className="searchbar_icon">
                <i className="fa fa-magnifying-glass"></i>
            </div>
            <div className="searchbar_bar">
                <input 
                    type="text" 
                    onChange={(event) => setInputSearch(event.target.value)} 
                    onKeyPress={(event) => search(event)}
                    value={inputSearch} 
                    placeholder="Busca juegos, consolas o accesorios..." 
                />
            </div>
        </div>
    )
}

export default Searchbar