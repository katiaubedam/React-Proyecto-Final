import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import Searchbar from './components/Searchbar';
import Item from './components/Item';
import LoginModal from './components/LoginModal';
import UserPage from './components/UserPage';
import Cart from './components/Cart';
import Finish from './components/Finish';
import Contact from './components/Contact';
import ContactFinish from './components/ContactFinish';
import Purchase from './components/Purchase';

import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/styles.css';


function App() {

  let [user, setUser] = useState(null)

  let [datos, setDatos] = useState([])
  let [url, setUrl] = useState("http://chanchullogames.infinityfreeapp.com/search.php?term=")
  let [next, setNext] = useState("")
  let [prev, setPrev] = useState("")

  let [loading, setLoading] = useState(false)
  let [loadingActive, setLoadingActive] = useState(true)
  let [error, setError] = useState("")
  let [loginModal, setLoginModal] = useState(false)

  let [menuDisplay, setMenuDisplay] = useState("0px")

  let [searchTerm, setSearchTerm] = useState("")

  let [cartItems, setCartItems] = useState([])
  let [stock, setStock] = useState([])
  let [cartCount, setCartCount] = useState(0)
  let [cartHistory, setCartHistory] = useState([])

  useEffect(() => {
    if (searchTerm !== "") {
      if (loadingActive) setLoading(true)
      axios.get(`http://chanchullogames.infinityfreeapp.com/search.php?term=${searchTerm}`).then(
        res => {
          if (res.data.results.length > 0) {
            setDatos(res.data)
            setNext(res.data.next)
            setPrev(res.data.prev)
            setLoading(false)
            setError("")
            setSearchTerm("")
          } else {
            setError("¡No se ha encontrado ningún resultado!")
            setLoading(false)
          }

        }
      ).catch(function (error) {
        setError(`Ha ocurrido un error al hacer la petición (${error.message})`)
        setLoading(false)
      })
    }
  }, [searchTerm])

  return (
    <BrowserRouter>
      <LoginModal 
        setLoginModal={setLoginModal}
        loginModal={loginModal}
        user={user}
        setUser={setUser}
        loading={loading}
        setLoading={setLoading}
      />
      <Header
        menuDisplay={menuDisplay}
        setMenuDisplay={setMenuDisplay}
        setLoginModal={setLoginModal}
        user={user}
        cartItems={cartItems}
        stock={stock}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
      <NavMenu
        menuDisplay={menuDisplay}
        setMenuDisplay={setMenuDisplay}
        setUrl={setUrl}
        setLoadingActive={setLoadingActive}
      />
      <Searchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="wrapper">
      <Routes>
        <Route path='/' element={
          <Main
            datos={datos}
            setDatos={setDatos}
            prev={prev}
            setPrev={setPrev}
            next={next}
            setNext={setNext}
            url={url}
            setUrl={setUrl}
            loading={loading}
            setLoading={setLoading}
            setLoadingActive={setLoadingActive}
            error={error}
            setError={setError}
            searchTerm={searchTerm}
          />
        } />
        <Route path="/item/:id" element={
          <div className="wrapper">
            <Item
              setUrl={setUrl}
              setLoading={setLoading}
              setError={setError}
              loading={loading}
              error={error}
              cartItems={cartItems}
              setCartItems={setCartItems}
              user={user}
              setLoginModal={setLoginModal}
              stock={stock}
              setStock={setStock}
              cartCount={cartCount}
              setCartCount={setCartCount}
            />
          </div>
        } />
        <Route path="/user" element={
          <UserPage
            user={user}
            setUser={setUser}
            setStock={setStock}
            setCartCount={setCartCount}
            cartHistory={cartHistory}
            setCartHistory={setCartHistory}
          />
        } />
        <Route path="/cart" element={
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            stock={stock}
            setStock={setStock}
            user={user}
            cartCount={cartCount}
            setCartCount={setCartCount}
            cartHistory={cartHistory}
            setCartHistory={setCartHistory}
          />
        } />
        <Route path="/purchase/:id" element={
          <Purchase 
            cartHistory={cartHistory}
          />
        } />
        <Route path="/finish" element={<Finish />} />
        <Route path="/contactFinish" element={<ContactFinish />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
