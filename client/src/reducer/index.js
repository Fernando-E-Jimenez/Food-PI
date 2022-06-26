import { GET_RECIPES, GET_DIETS, FILTER_BY_DIETS, ORDER_BY_NAME, SEARCH_BY_NAME, ORDER_BY_SCORE, RECIPE_DETAIL, POST_RECIPE } from "../actions";

const initialState = {
    recipes: [],
    recipesCopyState: [],
    diets: [],
    detail: []
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                recipesCopyState: action.payload
            }
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            }
        case FILTER_BY_DIETS:
            const recipes = state.recipesCopyState
            const recipesWithDiet = action.payload === 'All' ? recipes :
            recipes.filter(r => r.diets.includes(action.payload) || r.diets.map((e) => e.name).includes(action.payload));
            return {
                ...state,
                recipes: recipesWithDiet
            }
        case ORDER_BY_NAME:
            const recipesSorted = action.payload === 'asc' ?
                state.recipes.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (b.name > a.name) return -1;
                    return 0;
                }) :
                state.recipes.sort((a, b) => {
                    if (a.name > b.name) return -1;
                    if (b.name > a.name) return 1;
                    return 0;
                });
            return {
                ...state,
                recipes: recipesSorted
            }
        case ORDER_BY_SCORE:
            const recipesByScore = action.payload === 'asc' ?
                state.recipes.sort((a, b) => {
                    if (a.healthScore > b.healthScore) return 1;
                    if (b.healthScore > a.healthScore) return -1;
                    return 0;
                }) :
                state.recipes.sort((a, b) => {
                    if (a.healthScore > b.healthScore) return -1;
                    if (b.healthScore > a.healthScore) return 1;
                    return 0;
                });
            return {
                ...state,
                recipes: recipesByScore
            }

        case SEARCH_BY_NAME:
            return {
                ...state,
                recipes: action.payload
            };
        case POST_RECIPE:
            return {
                ...state
            }
        case RECIPE_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        default:
            return state
    }
};
export default reducer;