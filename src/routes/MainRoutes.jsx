import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NavBarComponent } from "../components"
import { Home, Guitarras, Bajos, Audio, Amplificadores, Pedales, Percusion, Cart } from "../pages"
import { ItemDetailContainer } from "../components"




export const MainRoutes = () => {
    return (
        <Router>
            <NavBarComponent />
            <Routes>
                <Route exact path="/" element={<Home />} /> 
                <Route exact path="/Guitarras"  element={<Guitarras />} />
                <Route exact path="/Bajos"  element={<Bajos />} />
                <Route exact path="/Audio"  element={<Audio />} />
                <Route exact path="/Amplificadores"  element={<Amplificadores />} />
                <Route exact path="/Pedales"  element={<Pedales />} />
                <Route exact path="/Percusion"  element={<Percusion />} />
                <Route exact path="/item/:id" element={<ItemDetailContainer />} />
                <Route exact path="/Carrito" element={<Cart />} />
            </Routes>
        </Router>
    )
}