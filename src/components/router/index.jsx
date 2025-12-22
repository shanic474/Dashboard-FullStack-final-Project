import { Route } from "react-router-dom";
import HomePage from "../../pages/homePage/HomePage.jsx";
import LoginPage from "../../pages/loginPage/LoginPage.jsx";
import UsersPage from "../../pages/usersPage/UsersPage.jsx";
import ProductsPage from "../../pages/productsPage/ProductsPage.jsx";
import Layout from "./Layout.jsx";
import {createRoutesFromElements,createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import AuthAdminPages from "./AuthAdminPages.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<LoginPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route element={<AuthAdminPages />}>
        <Route path="home" element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="products" element={<ProductsPage />} />
       </Route> 
    </Route>
  )
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
