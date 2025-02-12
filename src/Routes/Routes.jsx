import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/CommonRoutes/Home/Home";
import SignUp from "../Pages/CommonRoutes/SignUp/SignUp";
import SignIn from "../Pages/CommonRoutes/SignIn/SignIn";
import CreateStore from "../Pages/CommonRoutes/CreateStore/CreateStore";
import Dashboard from "../Dashboard/Dashboard";
import ManagerHome from "../Pages/ManagerRoutes/ManagerHome/ManagerHome";
import AddProduct from "../Pages/ManagerRoutes/AddProduct/AddProduct";
import Products from "../Pages/ManagerRoutes/Products/Products";
import Sales from "../Pages/ManagerRoutes/Sales/Sales";
import UpdateProduct from "../Pages/ManagerRoutes/Products/UpdateProduct";
import CheckOut from "../Pages/ManagerRoutes/CheckOut/CheckOut";
import SalesSummary from "../Pages/ManagerRoutes/SalesSummary/SalesSummary";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AdminPrivateRoute from "../Components/AdminPrivateRoute/AdminPrivateRoute";
import AuthorizationerrorPage from "../Pages/AuthorizationErrorPage/AuthorizationerrorPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ManagerPrivateRoute from "../Components/ManagerPrivateRoute/ManagerPrivateRoute";
import AdManPrivateRoute from "../Components/AdManPrivateRoute/AdManPrivateRoute";
import ManageShop from "../Pages/AdminRoutes/ManageShop/ManageShop";
import PaySubs from "../Pages/ManagerRoutes/PaySubs/PaySubs";
import AdminSalesSummary from "../Pages/AdminRoutes/AdminSalesSummary/AdminSalesSummary";
import ManageUsers from "../Pages/AdminRoutes/ManageUsers/ManageUsers";
import BannedShop from "../Components/BannedShop";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/sign-up',
                element:<SignUp></SignUp>
            },
            {
                path:'sign-in',
                element:<SignIn></SignIn>
            },

            // {
            //     path:'watchDemo',
            //     element:<WatchDemo></WatchDemo>
            // },
            {
                path:'/createStore',
                element:<PrivateRoute><CreateStore></CreateStore></PrivateRoute>
            },
            {
                path:'/authorizationError',
                element:<AuthorizationerrorPage></AuthorizationerrorPage>
            },{
                path:'/bannedShop',
                element:<BannedShop></BannedShop>
            }
            
        ]
        
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'managerHome',
                element:<ManagerPrivateRoute><ManagerHome></ManagerHome></ManagerPrivateRoute>
            },
            {
                path:'addProduct',
                element:<ManagerPrivateRoute><AddProduct></AddProduct></ManagerPrivateRoute>
            },
            {
                path:'products',
                element:<ManagerPrivateRoute><Products></Products></ManagerPrivateRoute>
            },
            {
                path:'sales',
                element:<ManagerPrivateRoute><Sales></Sales></ManagerPrivateRoute>
            },
            {
                path:'updateProduct/:id',
                element:<ManagerPrivateRoute><UpdateProduct></UpdateProduct></ManagerPrivateRoute>,
                loader:({params})=>fetch(`https://shopsync-server.vercel.app/products/update/${params.id}`)
            },
            {
                path:'checkOut',
                element:<ManagerPrivateRoute><CheckOut></CheckOut></ManagerPrivateRoute>
            },
            {
                path:'salesSummary',
                element:<ManagerPrivateRoute><SalesSummary></SalesSummary></ManagerPrivateRoute>
            },
            {
                path:'subscription',
                element:<ManagerPrivateRoute><PaySubs></PaySubs></ManagerPrivateRoute>
            },
            // Admin Routes
            // {
            //     path:'adminHome',
            //     element:<AdminPrivateRoute><AdminHome></AdminHome></AdminPrivateRoute>
            // },
            {
                path:'manageShop',
                element:<AdminPrivateRoute><ManageShop></ManageShop></AdminPrivateRoute>
            },
            {
                path:'adminSalesSummary',
                element:<AdminPrivateRoute><AdminSalesSummary></AdminSalesSummary></AdminPrivateRoute>
            },
            {
                path:'manageUsers',
                element:<AdminPrivateRoute><ManageUsers></ManageUsers></AdminPrivateRoute>
            }
        ]
    }
])

export default Routes;