import React, {createContext} from 'react';
import { Routes, Route} from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Layout from '../Layout/index';

// import LogIn from '../LogIn/index';
// import Signup from '../Signup/index';
// import SignupSuccess from '../Signup/SignupSuccess';

import Home from '../Home/index';
import AccountIndex from '../Accounts/index';
import FaqIndex from '../Faqs/index';
import GiftCodeIndex from '../GiftCodes/index';
import GoalIndex from '../Goals/index';
import PointIndex from '../Points/index';


const Accounts = () => (
  <Routes>
    <Route index element={AccountIndex} />
  </Routes>
);
const GiftCodes = () => (
  <Routes>
    <Route index element={GiftCodeIndex} />
    
  </Routes>
);
const Points = () => (
  <Routes>
    <Route index element={PointIndex} />
    
  </Routes>
);
const Goals = () => (
  <Routes>
    <Route index  element={GoalIndex} />
    
  </Routes>
);
const Faqs = () => (
  <Routes>
    <Route index element={FaqIndex} />
    
  </Routes>
);
// const privateRoutes = () => {
//   return (
//     <Route path="/" element={<Layout />} >
//       {/* <Route index element={<Login />} /> */}
//       <PrivateRoute index component={Home} />
//       <PrivateRoute path="/my-account" component={Accounts} />
//       <PrivateRoute path="/my-gift-codes" component={GiftCodes} />
//       <PrivateRoute path="/my-points" component={Points} />
//       <PrivateRoute path="/my-goals" component={Goals} />
//       <PrivateRoute path="/faqs" component={Faqs} />
//     </Route>

//   )
// }


const RouteIndex = () => (
    <Routes>
      {/* <PublicRoute exact path="/login" component={LogIn} restricted={true} />
      <PublicRoute exact path="/signup" component={Signup} restricted={true} /> */}
      <Route path="/" element={<Layout />} >
        <Route index element={Home} />
        <Route path="/my-account" element={Accounts} />
        <Route path="/my-gift-codes" element={GiftCodes} />
        <Route path="/my-points" element={Points} />
        <Route path="/my-goals" element={Goals} />
        <Route path="/faqs" element={Faqs} />
      </Route>
    </Routes>
);

export default RouteIndex;
