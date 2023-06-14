import {Link} from "react-router-dom";
import {IRecipeProps} from './../types';

const Recipe = ({id, title, description, img}: IRecipeProps) => {
    return (
        <div className="recipe">
            <img src={img} alt={title} />
            <div className="recipe__text">
                <Link to={`/recipes/${id}`} className="recipe__title">{title}</Link>
                <p className="recipe__description">{description}</p>
            </div>
        </div>
    );
}

export default Recipe;