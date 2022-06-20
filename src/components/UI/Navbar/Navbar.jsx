import React, { useContext } from 'react';
import { Link, Navigate} from 'react-router-dom';
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
                {/* <MyButton><Link to='/about'> test</Link>  </MyButton> */}
                <Link to="/about" className='link'> <MyButton ><p className='par'>О сайте</p> </MyButton> </Link>
                <Link to="/posts" className='link'> <MyButton > <p className='par'> Посты </p>  </MyButton></Link>
            </div>
        </div>
    );
};

export default Navbar;