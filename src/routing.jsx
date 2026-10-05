import {Routes, Route} from "react-router"
import Home from "./Pages/Home/Home"

export default function Pages(){


    return(
        <Routes>
            <Route index element={<Home/>} />
        </Routes>
    )
}