import {Link} from 'react-router-dom';
import {useAppDispatch} from '../hooks/hook';
import {recipesActions} from '../store/recipesSlice';
import {IRecipeProps} from './../types';
import del from './../images/delete.svg';

interface IFavoriteItem extends IRecipeProps {
    ingredients: string[];
}

const FavoriteItem = ({id, title, description, ingredients, img}: IFavoriteItem) => {
    const dispatch = useAppDispatch();

    return (
        <div className="item">
            <div className="item__img">
                <img src={img} alt={title} />
            </div>
            <div className="item__text">
                <div className="item__heading">
                    <h2 className="item__title">
                        <Link to={`/recipes/${id}`} className="item__title">{title}</Link>
                    </h2>
                    <button onClick={() => dispatch(recipesActions.deleteRecipeFromFavorites(id))}>
                        <img src={del} alt="delete" />
                    </button>
                </div>
                <p className="item__description"><strong>Description: </strong>{description}</p>
                <p className="item__description"><strong>Ingredients: </strong>{ingredients.join('; ')}</p>
            </div>
        </div>
    );
}

export default FavoriteItem;