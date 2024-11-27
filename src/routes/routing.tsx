import { Routes, Route ,Navigate } from 'react-router-dom';
import Home from '../components/home/home';

// import AuthGuard from '../guards/authguard';

const Routing = () => {
    return (
        <Routes>

        <Route path="/home" element={<Home />} />
    </Routes>
    );
};

export default Routing;
