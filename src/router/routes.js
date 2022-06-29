import About from "../pages/About";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";


export const privateRoutes = [
    {path: "/", element: <HomePage/>},
    {path: "/about", element: <About/>},
    {path: "/posts", element: <Posts/>},
    {path: "/posts/:id", element: <PostIdPage/>},
]

export const publicRoutes = [
    {path: "/login", element: <Login/>},
]