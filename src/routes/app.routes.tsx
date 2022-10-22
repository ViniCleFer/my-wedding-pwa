import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
// import Login from '../pages/Login';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='*' element={<Dashboard />} />
    {/* <Route path='/dashboard' element={<Dashboard />} /> */}
  </Routes>
);

export default AppRoutes;
