import {useForm} from 'react-hook-form';
import {useNavigate, Link} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const Signup = () => {
    const navigate = useNavigate();
    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({mode: "onBlur"});

    const onSubmit = async (data: any) => {
        const auth = getAuth();
        reset();
        try {
            const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password);
            const userData = {
                email: user.email,
            };
            localStorage.setItem('user', JSON.stringify(userData));
            navigate('/');
        } catch(error: any) {
            alert(error.message);
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const userData = {
                email: user.email,
            }
            localStorage.setItem('user', JSON.stringify(userData));
            navigate('/');
        } catch (error: any){
            alert(error.message);
        }
    }

    return (
        <section className="login">
            <h1 className="login__title">Sign up</h1>
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
                <input disabled={!isValid} type="submit" value="Sign up" className="login__submit" />
                <button onClick={handleGoogleSignIn} className="google-button">Continue with Google</button>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </form>
        </section>
    );
}

export default Signup;