import {Suspense} from 'react';
import {Outlet, Link, useNavigate} from 'react-router-dom';
import {instructionActions} from '../store/instructionSlice';
import {useAppDispatch} from '../hooks/hook';
import Loader from './Loader';

const Layout = () => { 
    const isAuth = localStorage.getItem('user');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const logout = () => {
        localStorage.removeItem('user');
        navigate('/');
        dispatch(instructionActions.endTracking());
    }

    return (
        <>
            <nav className="nav">
                <h2><Link to="/" className="nav__logo">Recipes</Link></h2>
                <ul className="nav__links">
                    <Link to="/" className="nav__link">Home</Link>
                    <Link to="/recipes" className="nav__link">Recipes</Link> 
                    <Link to="/saved" className="nav__link">Saved</Link>
                    <Link to="/favorites" className="nav__link">Favorites</Link>
                </ul>
                <div className="nav__authentication">
                    {isAuth ?
                        <button onClick={logout} className="nav__signup">Log out from {JSON.parse(isAuth).email}</button>
                    :
                    <div className="nav__authentication">
                        <Link to="/login" className="nav__signin">Sign in</Link>
                        <Link to="/signup" className="nav__signup">Sign up</Link>
                    </div>
                    }
                </div>
            </nav>

            <main className="container">
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>

            <footer className="footer">
                <p className="footer__text">&copy; Recipes 2023 All rights reserved</p>
            </footer>
        </>
    );
}

export default Layout;