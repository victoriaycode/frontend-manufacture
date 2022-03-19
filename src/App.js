import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersManager from 'pages/admin/UsersManager';
import ProductsManager from 'pages/admin/ProductsManager';
import AdminLayout from 'layouts/AdminLayout';
import OrdersManager from 'pages/seller/OrdersManager';
import { Auth0Provider } from "@auth0/auth0-react";
import ButtonLogin from 'components/ButtonLogin';
import { UserContext } from 'context/UserContext';
import { useState } from 'react';
import PrivateRoute from 'components/PrivateRoute';
import OrdersTable from 'components/OrdersTable';
import IndexAdmin from 'pages/admin/IndexAdmin';
<script
  src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
></script>


function App() {
  const [userData, setUserData] = useState({});
  return (

    <Auth0Provider
      domain='projectsvi.us.auth0.com'
      clientId='naPrZmPJ9i6LpRCr3byABF1kb0VosL1j'
      redirectUri="https://manufacturer.herokuapp.com/admin"
      audience='api-manufacturer-projectvi'
    >
      <div>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Switch>
              <Route path={['/admin', '/admin/productos', '/admin/ventas', '/admin/usuarios', '/vendedor/ventas', '/vendedor', '/vendedor/ventas/verlistado']}>
                <AdminLayout>
                  <Switch>

                    <Route path='/admin/productos'>
                      <PrivateRoute roleList={["administrador"]}>
                        <ProductsManager />
                      </PrivateRoute>
                    </Route>
                    <Route path='/admin/ventas'>
                      <PrivateRoute roleList={["administrador"]}>
                        <OrdersManager />
                      </PrivateRoute>
                    </Route>
                    <Route path='/admin/usuarios'>
                      <PrivateRoute roleList={["administrador"]}>
                        <UsersManager />
                      </PrivateRoute>
                    </Route>
                    <Route path='/vendedor/ventas/verlistado'>
                      <PrivateRoute roleList={["vendedor"]}>
                        <OrdersTable></OrdersTable>
                      </PrivateRoute>
                    </Route>
                    <Route path='/vendedor/ventas/'>
                      <PrivateRoute roleList={["vendedor"]}>
                        <OrdersManager />
                      </PrivateRoute>
                    </Route>

                    <Route path='/vendedor'>
                      <IndexAdmin />
                    </Route>
                    <Route path='/admin'>
                     
                      <IndexAdmin />
                     
                    </Route>

                  </Switch>

                </AdminLayout>
              </Route>

              <Route path="/">
                <ButtonLogin />
              </Route>
            </Switch>
          </Router>

        </UserContext.Provider>
      </div>
    </Auth0Provider>
  );
};
export default App;