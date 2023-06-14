import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IInstruction {
    instruction: string[];
    tracking: boolean;
}

const initialState: IInstruction = {
    instruction: [],
    tracking: false
}

const instructionSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        startTracking(state, action: PayloadAction<string[]>){
            state.instruction = state.instruction.concat(action.payload);
            state.tracking = true;
        },
        endTracking(state){
            state.instruction.splice(0, state.instruction.length);
            state.tracking = false;
        }
    }
});

export const {reducer: instructionReducer, actions: instructionActions} = instructionSlice;