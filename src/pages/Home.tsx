import {Link} from 'react-router-dom';
import Recipe from '../components/Recipe';
import {useAppSelector} from './../hooks/hook';

const Home = () => {
    const recipes = useAppSelector(state => state.recipes.recipes);
    return (
        <>
            <header className="header">
                <h1 className="header__title">Discover a world of culinary delights<br /> with our recipe website</h1>
                <p className="header__text">Whether you're a seasoned chef or a beginner in the kitchen, our site offers a diverse collection of mouthwatering recipes for every taste and occasion</p>
            </header>
            <main className="home">
                <h1 className="home__title">Here are some of our recipes</h1>
                    <section className="recipes">
                        {recipes.map(recipe => {
                            if (recipe.id < 4){
                                return <Recipe 
                                            key={recipe.id} 
                                            id={recipe.id}
                                            title={recipe.title}
                                            description={recipe.description}
                                            img={recipe.img}
                                        />
                            }
                        })}
                    </section>
                    <div className="home__link">
                        <Link to="/recipes" className="login__submit">View all recipes</Link>
                    </div>
            </main>
        </>
    );
}

export default Home;