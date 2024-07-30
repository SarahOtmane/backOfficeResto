import { BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';

import Login from "./screen/Login";
import Restos from "./screen/Restos";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<Login />} />
                <Route path="/admin/restaurants" element={<Restos />} />
            </Routes>
        </BrowserRouter>
    )
}