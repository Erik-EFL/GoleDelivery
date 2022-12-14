import React from 'react';

import {
  BrowserRouter as Router, Navigate, Route, Routes,
} from 'react-router-dom';

import Admin from '../pages/admin';
import Checkout from '../pages/Checkout';
import Marketplace from '../pages/marketplace';
import MyShoppes from '../pages/MyShoppes';
import OrderDetails from '../pages/OrderDetails/customer';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={ <Navigate to="/login" replace /> }
        />
        <Route path="/register" element={ <SignUp /> } />
        <Route path="/login" element={ <SignIn /> } />
        <Route
          path="/customer/products"
          element={ <Marketplace /> }
        />
        <Route
          path="/customer/checkout"
          element={ <Checkout userRole="customer" /> }
        />
        <Route
          path="/customer/orders/:id"
          element={ <OrderDetails /> }
        />
        <Route
          path="/seller/orders/:id"
          element={ <OrderDetails /> }
        />
        <Route
          path="/customer/orders"
          element={ <MyShoppes /> }
        />
        <Route
          path="/seller/orders"
          element={ <MyShoppes /> }
        />
        <Route path="/admin/manage" element={ <Admin /> } />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
