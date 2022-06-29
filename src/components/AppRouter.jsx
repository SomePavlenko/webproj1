import React from 'react';
import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { publicRoutes, privateRoutes } from '../router/routes';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading){
        return <Loader/>
    }

    return (
        isAuth
        ?
        <Routes>
        {privateRoutes.map(route => 
            <Route 
                path={route.path} 
                element={route.element} 
            />
        )}
        <Route path="*" element={<Navigate replace to='/' />} />
        </Routes>
        :
        <Routes>
        {publicRoutes.map(route => 
            <Route 
                path={route.path} 
                element={route.element} 
            />
        )}
         <Route path="*" element={<Navigate replace to='/login' />} />
        </Routes>

    );
};

export default AppRouter;

