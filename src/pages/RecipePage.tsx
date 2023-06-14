import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../hooks/hook";
import {instructionActions} from "../store/instructionSlice";
import {recipesActions} from "../store/recipesSlice";
import {IRecipe} from "../types";

const RecipePage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const recipes = useAppSelector(state => state.recipes.recipes);
    const {tracking, instruction} = useAppSelector(state => state.instruction);
    const isAuth = localStorage.getItem('user');

    let currentRecipe: IRecipe = {
        id: 0, 
        title: "", 
        description: "", 
        ingredients: [""], 
        instruction: [""],
        time: 0,
        isFavorite: false,
        isSaved: false,
        img: ""
    };

    for (let i = 0; i < recipes.length; i++){
        if (recipes[i].id === Number(id)){
            currentRecipe = recipes[i];
        }
    }

    const handleTracking = () => {
        dispatch(instructionActions.startTracking(currentRecipe.instruction));
    }

    const stopTracking = () => {
        dispatch(instructionActions.endTracking());
    }

    return (
        <main className="recipe-item">
            <section className="recipe-item__info">
                <div className="recipe-item__img">
                    <img src={currentRecipe.img} alt={currentRecipe.title} />
                </div>
                <section className="recipe-item__description">
                    <section className="recipe-item__heading">
                        <h2 className="recipe-item__title">{currentRecipe.title}</h2>
                        {isAuth && <button onClick={() => dispatch(recipesActions.addRecipeToSaved(currentRecipe.id))} className="recipe-item__save">{currentRecipe.isSaved ? 'Saved' : 'Save'}</button>}
                        {isAuth && <button onClick={() => dispatch(recipesActions.addRecipeToFavorites(currentRecipe.id))} className="recipe-item__favorite">{currentRecipe.isFavorite ? 'Marked as favorite' : 'Mark as favorite'}</button>}
                    </section>
                    <p style={{fontSize: 18, fontWeight: 500, color: 'var(--main)'}}>Ingredients:</p>
                    {currentRecipe.ingredients.map(ingredient => 
                        <p className="recipe-item__instruction">{ingredient}</p>
                    )}
                </section>
            </section>
            <section className="recipe-item__tracking">
                <p className="recipe-item__title">Instruction</p>
                {tracking ? '' : currentRecipe.instruction.map(instruction => 
                    <p className="recipe-item__instruction" key={instruction}>{instruction}</p>
                )}
                {tracking ? 
                <button className="start-cooking" onClick={stopTracking}>Stop cooking</button>
                :
                <button className="start-cooking" onClick={handleTracking} disabled={!isAuth}>Start cooking</button>
                }
                {!isAuth && <p>Unauthenticated users have limited access to my Recipe Management App. You can't enter "Start Cooking" mode. <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link> to get full access!</p>}
                <ul className="tracking-container">
                    {instruction && instruction.map(ingredient => {
                        return (
                            <div key={ingredient} className="ingredient-tracking">
                                <input type="checkbox" />
                                <p>{ingredient}</p>
                            </div>
                        );
                    }
                    )}
                </ul>
            </section>
        </main>
    );
}

export default RecipePage;