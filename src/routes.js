import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductAction from   './pages/ProductActionPage/ProductAction';


const routers = [
    {
        path:'/',
        exact:true,
        main:()=><HomePage/>
    },
    {
        path:'/product-list',
        exact:false,
        main:()=><ProductListPage/>
    },
    {
        path:'/product-add',
        exact:false,
        main:()=><ProductAction/>
    },
    {
        path:'/product-edit:id',
        exact:false,
        main:(match)=><ProductAction match={match}/> //muon lay tham so phai co doi tuong match
    },
    {
        path:'',
        exact:false,
        main:()=><NotFoundPage/>
    }
];
export default routers;