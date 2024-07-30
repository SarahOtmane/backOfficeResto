import { BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';

import Login from "./screen/Login";
import Menu from "./components/Menu";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<Login />} />
                <Route path="/admin/restaurants" element={<Menu />} />
            </Routes>
        </BrowserRouter>
    )
}