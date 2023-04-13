import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Reservas } from "./Reservas";

export function Menu(){
    return (
        <BrowserRouter>
            <div className="nav">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/reservas">Reservas</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/reservas" element={<Reservas/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};