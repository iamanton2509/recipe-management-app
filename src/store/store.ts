import {configureStore} from '@reduxjs/toolkit';
import {recipesReducer} from './recipesSlice';
import {instructionReducer} from './instructionSlice';

const store = configureStore({
    reducer: {
        recipes: recipesReducer,
        instruction: instructionReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;