import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';

const AppRouter = () => {
    return (
        <Routes>
                <Route path="/posts" element={<Posts/>} />
                <Route path="/posts/:id" element={<PostIdPage/>} />
                <Route path="/about" element={<About/>} />
                <Route path="*" element={<Posts/>} />
        </Routes>
    );
};

export default AppRouter;