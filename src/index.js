import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header';
import Movies from './Movies';
import Session from './Session';
import Seats from './Seats';
import Success from './Success';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/session/:idSession" element={<Session />} />
                <Route path="/seats/:idSeats" element={<Seats />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </BrowserRouter>
    );
}

const app = App();
const elemento = document.querySelector(".root");
ReactDOM.render(app, elemento);