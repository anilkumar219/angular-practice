import { createReducer, on } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import * as RecipesActions from './recipe.actions';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: []
};

function one(...args) {
    // This could be refactored when TS releases the version with this fix:
    // https://github.com/microsoft/TypeScript/pull/41544
    console.log(args);

    const reducer = args.pop();
    const types = args.map((creator) => creator.type);
    return { reducer, types };
}

const _recipeReducer = createReducer(initialState, 
  on(RecipesActions.SetRecipes, (state, recipes) => {
    return {
      ...state,
      recipes: [...recipes]
    };
  }),
  on(RecipesActions.AddRecipe, (state, recipe) => {
    return {
      ...state,
      recipes: [...state.recipes, recipe]
    };
  }),
  on(RecipesActions.UpdateRecipe, (state, payload) => {
    const updatedRecipe = {
      ...state.recipes[payload.index],
      ...payload.newRecipe
    };

    const updatedRecipes = [...state.recipes];
    updatedRecipes[payload.index] = updatedRecipe;

    return {
      ...state,
      recipes: updatedRecipes
    };
  }),
  on(RecipesActions.DeleteRecipe, (state, recipeIndex) => {
    return {
      ...state,
      recipes: state.recipes.filter((recipe, index) => {
        return index !== recipeIndex;
      })
    };
  })
)

export function recipeReducer(state, action) {
  return _recipeReducer(state, action);
}
