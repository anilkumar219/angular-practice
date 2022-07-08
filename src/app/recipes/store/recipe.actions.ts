import { Action, createAction, props } from '@ngrx/store';

import { Recipe } from '../recipe.model';

export const SET_RECIPES = '[Recipes] Set Recipes';
export const FETCH_RECIPES = '[Recipes] Fetch Recipes';
export const ADD_RECIPE = '[Recipe] Add Recipe';
export const UPDATE_RECIPE = '[Recipe] Update Recipe';
export const DELETE_RECIPE = '[Recipe] Delete Recipe';
export const STORE_RECIPES = '[Recipe] Store Recipes';

export const SetRecipes = createAction(SET_RECIPES, props<any>());
export const FetchRecipes = createAction(FETCH_RECIPES);
export const AddRecipe = createAction(ADD_RECIPE, props<Recipe>());
export const UpdateRecipe = createAction(UPDATE_RECIPE, props<{ index: number; newRecipe: Recipe }>());
export const DeleteRecipe = createAction(DELETE_RECIPE, props<any>());
export const StoreRecipes = createAction(STORE_RECIPES);

