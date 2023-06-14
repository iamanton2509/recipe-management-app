import {Suspense} from 'react';
import {Outlet, Link} from 'react-router-dom';
import Loader from './Loader';

const Layout = () => {
    return (
        <>
            <nav className="nav">
                <h2><Link to="/" className="nav__logo">Recipes</Link></h2>
                <ul className="nav__links">
                    <Link to="/" className="nav__link">Home</Link>
                    <Link to="/recipes" className="nav__link">Recipes</Link>
                </ul>
                <div className="nav__authentication">
                    <div className="nav__authentication">
                        <Link to="/login" className="nav__signin">Sign in</Link>
                        <Link to="/signup" className="nav__signup">Sign up</Link>
                    </div>
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