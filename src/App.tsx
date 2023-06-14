import {lazy} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Layout from './components/Layout';
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Recipes = lazy(() => import('./pages/Recipes'));
const RecipePage = lazy(() => import('./pages/RecipePage'));
const Saved = lazy(() => import('./pages/Saved'));
const Favorites = lazy(() => import('./pages/Favorites'));
import {RequireAuth} from './hoc/RequireAuth';
import ScrollToTop from './utils/ScrollToTop';
import './css/main.css';

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="recipes" element={<Recipes />} />
                    <Route path="recipes/:id" element={<RecipePage />} />
                    <Route path="saved" element={
                        <RequireAuth>
                            <Saved />
                        </RequireAuth>
                    } />
                    <Route path="favorites" element={
                        <RequireAuth>
                            <Favorites />
                        </RequireAuth>
                    } />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;