import { BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';

import Login from "./screen/Login";
import Restos from "./screen/Restos";
import PlanTable from "./screen/PlanTable";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={<Login />} />
                <Route path="/admin/restaurants" element={<Restos />} />
                <Route path="/admin/planTable" element={<PlanTable />} />
            </Routes>
        </BrowserRouter>
    )
}