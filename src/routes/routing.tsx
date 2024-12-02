import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/home/home';
import Layout from '../components/layout/layout';
import SearchClaim from '../pages/Search and Claim/search-claim';
import UnclainItem from '../pages/Unclaim item/unclain-item';

const Routing = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route path='/Search' element={<SearchClaim />} />
            <Route path='/unclaim' element={<UnclainItem />} />
            </Route>
            {/* <Route path="" element={<Home />} /> */}
            
        </Routes>
    );
};

export default Routing;
