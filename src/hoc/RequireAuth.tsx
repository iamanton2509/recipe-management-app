import {useLocation, Navigate} from 'react-router-dom';

const RequireAuth = ({children}: any) => {
    const location = useLocation();
    const auth = Boolean(localStorage.getItem('user'));

    if (!auth){
        return <Navigate to="/login" state={{from: location}} />
    }

    return children;
}

export {RequireAuth};