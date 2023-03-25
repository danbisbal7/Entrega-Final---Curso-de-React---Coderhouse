import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Guitarras, Bajos, Audio, Amplificadores, Pedales, Percusion } from "../pages"

export const MainRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/"  element={<Home />} />
                <Route exact path="/Guitarras"  element={<Guitarras />} />
                <Route exact path="/Bajos"  element={<Bajos />} />
                <Route exact path="/Audio"  element={<Audio />} />
                <Route exact path="/Amplificadores"  element={<Amplificadores />} />
                <Route exact path="/Pedales"  element={<Pedales />} />
                <Route exact path="/Percusion"  element={<Percusion />} />
            </Routes>
        </Router>
    )
}