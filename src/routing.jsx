import {Routes, Route} from "react-router"
import Home from "./Pages/Home/Home"
import Auth from "./Pages/Auth/Auth"
export default function Pages(){


    return(
        <Routes>
            <Route index element={<Home/>} />
            <Route path="auth" element={<Auth/>} />
        </Routes>
    )
}