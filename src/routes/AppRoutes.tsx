import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Calculator from '../components/Calculator';
import Home from '../pages/home';
import WhatIWantedToSay from '../pages/what-i-wanted-to-say';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/what-i-wanted-to-say' element={<WhatIWantedToSay />} />
                {/* <Route path='/calculator' element={<Calculator />} /> */}
            </Routes>
        </BrowserRouter>
    );
}