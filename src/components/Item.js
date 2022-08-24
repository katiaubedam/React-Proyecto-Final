import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import ItemImg from './ItemImg.js';
import ItemFeatures from './ItemFeatures.js';

function Item(props) {

    window.scrollTo({ top: 0, behavior: 'smooth' })

    let params = useParams()
    let [item, setItem] = useState([])

    useEffect(() => {
        props.setLoading(true)
        axios.get(`http://ec2-13-38-244-163.eu-west-3.compute.amazonaws.com/item.php?id=${params.id}`).then(
            res => {
                if (res.data.results !== null) {
                    setItem(res.data)
                    props.setLoading(false)
                    props.setError("")
                } else {
                    props.setError("404: página no encontrada")
                    props.setLoading(false)
                }
            }
        ).catch(function(error) {
            props.setError(error.message)
            props.setLoading(false)
        })
      }, [])

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
                item.results ?
                    <div className="item_info_container">
                      <ItemImg item={item.results} />
                      <ItemFeatures 
                        item={item.results} 
                        user={props.user} 
                        cartItems={props.cartItems} 
                        setCartItems={props.setCartItems} 
                        setLoginModal={props.setLoginModal}
                        stock={props.stock}
                        setStock={props.setStock}
                        cartCount={props.cartCount}
                        setCartCount={props.setCartCount}
                      />
                    </div>
                    :
                    <></>
        }
        </>
        
    )
}

export default Item