import { useEffect } from "react"
import axios from "axios"

import Juego from "./Juego"

function Main(props) {

    useEffect(() => {
        if (props.searchTerm == "") {
            if (props.loadingActive) props.setLoading(true)
            axios.get(props.url).then(
                res => {
                    props.setDatos(res.data)
                    props.setNext(res.data.next)
                    props.setPrev(res.data.prev)
                    props.setLoading(false)
                    props.setError("")
                }
            ).catch(function (error) {
                props.setError(error.message)
                props.setLoading(false)
            })
        }
    }, [props.url])

    function pagination(page) {
        props.setLoadingActive(false)
        props.setUrl(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            {props.loading ?
            <div className="loading_container">
                <div className="loading_icon fa-3x">
                    <i className="fa fa-spinner fa-spin"></i>
                </div>
            </div>
            :
            props.error ?
                <div className="error_container">
                    <p>{props.error}. Por favor, vuelve a intentarlo.</p>
                </div>
                :
                props.datos.results ?
                    <div className="card_container">
                        {props.datos.results.map((juego, i) => {
                            return (
                                <Juego
                                    juego={juego}
                                    key={i}
                                />
                            )
                        })}
                    </div>
                    :
                    <></>
                }

            {parseInt(props.datos.pageCount) > 1 && !props.error ?
                    <div className="navigator_container">
                        {props.prev !== null ? <button onClick={() => { pagination(props.prev) }}><i className="fa fa-angle-left"></i></button> : <></>}
                        <p>Página {props.datos.page} de {props.datos.pageCount}</p>
                        {props.next !== null ? <button onClick={() => { pagination(props.next) }}><i className="fa fa-angle-right"></i></button> : <></>}
                    </div>
                    :
                    <></>
            }
        </>
    )
}

export default Main