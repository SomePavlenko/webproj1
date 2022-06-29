import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout} >
                Выйти
            </MyButton>
            <div className="navbar__links">
                <Link to="/about" className='link'>
                    <MyButton >
                        О сайте
                    </MyButton>
                </Link>
                <Link to="/posts" className='link'>
                    <MyButton >
                        Посты
                    </MyButton>
                </Link>
                <Link to="/" className='link'>
                    <MyButton >
                        Главная
                    </MyButton>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;