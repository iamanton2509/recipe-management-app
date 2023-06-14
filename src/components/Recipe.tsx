import {Link} from "react-router-dom";
import {useAppDispatch} from './../hooks/hook';
import {recipesActions} from "../store/recipesSlice";
import {IRecipeProps} from './../types';
import star from './../images/star.svg';
import saved from './../images/saved.svg';

const Recipe = ({id, title, description, img}: IRecipeProps) => {
    const dispatch = useAppDispatch();
    const isAuth = Boolean(localStorage.getItem('user'));

    return (
        <div className="recipe">
            <img src={img} alt={title} />
            <div className="recipe__text">
                <Link to={`/recipes/${id}`} className="recipe__title">{title}</Link>
                <p className="recipe__description">{description}</p>
                {isAuth && <div className="recipe__icons">
                    <img src={star} alt="Add to favorites" onClick={() => dispatch(recipesActions.addRecipeToFavorites(id))} />
                    <img src={saved} alt="Add to saved" onClick={() => dispatch(recipesActions.addRecipeToSaved(id))} />
                </div>}
            </div>
        </div>
    );
}

export default Recipe;