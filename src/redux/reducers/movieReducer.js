import { actionsTpyes } from "../actions/actionsType";

const initialState = {
    popularMovies: [],
    genres: [],
    isLoading: true,
}

export const movieReducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionsTpyes.SET_MOVIES:
            return {...state, popularMovies: action.payload, isLoading: false};

        case actionsTpyes.SET_CATEGORIES:
            return{...state, genres: action.payload}    
        default:
            return state;
    }
}