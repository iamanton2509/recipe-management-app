import {useAppSelector} from './../hooks/hook';
import FavoriteItem from '../components/FavoriteItem';

const Saved = () => {
    const recipes = useAppSelector(state => state.recipes.recipes);
    let isEmpty: boolean = false;
    for (let i = 0; i < recipes.length; i++){
        if (recipes[i].isSaved){
            isEmpty = true;
        }
    }
    return (
        <>
            <h1 className="recipes__heading">Saved</h1>
            {isEmpty === false && <h1 className="empty">You can store and manage your favorite recipes. Now your favorite list is empty</h1>}
            <section className="saved">
                {recipes.map(recipe => {
                    if (recipe.isSaved){
                    return <FavoriteItem 
                                key={recipe.id}
                                id={recipe.id}
                                title={recipe.title}
                                description={recipe.description}
                                ingredients={recipe.ingredients}
                                img={recipe.img}
                            />
                    } 
                }
                )}
            </section>
        </>
    );
}

export default Saved;