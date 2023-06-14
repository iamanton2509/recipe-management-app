import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import recipes from '../data/recipes';
import {IRecipe} from '../types';

type TypeRecipes = {
    recipes: IRecipe[];
}

const initialState: TypeRecipes = {
    recipes: recipes
}

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipeToFavorites (state, action: PayloadAction<number>){
            const favoriteRecipe = state.recipes.find(recipe => recipe.id === action.payload);
            if (favoriteRecipe){
                favoriteRecipe.isFavorite = true;
                favoriteRecipe.isSaved = true;
            }
        },
        addRecipeToSaved (state, action: PayloadAction<number>){
            const savedRecipe = state.recipes.find(recipe => recipe.id === action.payload);
            if (savedRecipe){
                savedRecipe.isSaved = true;
            }
        },
        deleteRecipeFromFavorites (state, action: PayloadAction<number>){
            const deletedRecipe = state.recipes.find(recipe => recipe.id === action.payload);
            if (deletedRecipe){
                deletedRecipe.isFavorite = false;
                deletedRecipe.isSaved = false;
            }
        },
        deleteRecipeFromSaved (state, action: PayloadAction<number>){
            const deletedRecipe = state.recipes.find(recipe => recipe.id === action.payload);
            if (deletedRecipe){
                deletedRecipe.isSaved = false;
            }
        },
        sortRecipes (state, action: PayloadAction<string>){
            if (action.payload === 'ascending'){
                state.recipes.sort((a, b) => a['time'] - b['time']);
            } else if (action.payload === 'descending'){
                state.recipes.sort((a, b) => b['time'] - a['time']);
            } else if (action.payload === 'id'){
                state.recipes.sort((a, b) => a['id'] - b['id']);
            }
        }
    }
});

export const {actions: recipesActions, reducer: recipesReducer} = recipesSlice;