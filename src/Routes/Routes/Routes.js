import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import ProductCategory from '../../Pages/Home/Category/ProductCategory/ProductCategory';
import SignUp from '../../Pages/SignUp/SignUp';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import DashboardLayout from '../../layouts/DashboardLayout';
import MyOrder from '../../Pages/Dashboard/MyOrder/MyOrder';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/product/:id',
                element: <ProductCategory></ProductCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myorder',
                element: <MyOrder></MyOrder>
            }
        ]
    }
])

export default router;