import {useAppSelector} from '../hooks/hook';
import FavoriteItem from '../components/FavoriteItem';

const Favorites = () => {
    const recipes = useAppSelector(state => state.recipes.recipes);
    let isEmpty: boolean = false;
    for (let i = 0; i < recipes.length; i++){
        if (recipes[i].isFavorite){
            isEmpty = true;
        }
    }
    return (
        <>
            <h1 className="recipes__heading">Favorites</h1>
            {isEmpty === false && <h1 className="empty">You can store and manage your favorite recipes. Now your favorite list is empty</h1>}
            <section className="saved">
                {recipes.map(favorite => {
                    if (favorite.isFavorite){
                        return <FavoriteItem 
                                key={favorite.id}
                                id={favorite.id}
                                title={favorite.title}
                                description={favorite.description}
                                ingredients={favorite.ingredients}
                                img={favorite.img}
                            />
                    } 
                }
                )}
            </section>
        </>
    );
}

export default Favorites;