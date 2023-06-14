import {useLocation, useNavigate, Link} from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {useForm} from 'react-hook-form';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/';
    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({mode: "onBlur"});

    const onSubmit = (data: any) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(({user}) => {
                localStorage.setItem('user', JSON.stringify(user));
                reset();
                navigate(fromPage);
            })
            .catch(() => alert('The user does not exist'));
    }

    const handleGoogleSignIn = async () => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const userData = {
                email: user.email,
                id: user.uid,
                token: user.refreshToken
            }
            localStorage.setItem('user', JSON.stringify(userData));
            navigate(fromPage);
        } catch (error: any){
            alert(error.message);
        }
    }

    return (
        <section className="login">
            <h1 className="login__title">Log in</h1>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <input 
                    {...register("email", {
                        required: "The field must be filled", 
                        pattern: {
                            value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                            message: 'Invalid email'
                        }
                    })} 
                    className="login__input" 
                    placeholder="Email" 
                />
                <div>{errors?.email && <p style={{color: 'red'}}>{String(errors?.email?.message)}</p>}</div>
                <input 
                    {...register("password", {
                        required: "The field must be filled",
                        minLength: {
                            value: 8,
                            message: "Password is too simple"
                        }
                    })} 
                    className="login__input" 
                    type="password"
                    placeholder="Password" 
                />
                <div>{errors?.password && <p style={{color: 'red'}}>{String(errors?.password?.message)}</p>}</div>
                <input disabled={!isValid} type="submit" value="Login" className="login__submit" />
                <button onClick={handleGoogleSignIn} className="google-button">Continue with Google</button>
                <p>Don't have an account? <Link to="/signup">Register</Link></p>
            </form>
        </section>
    );
}

export default Login;