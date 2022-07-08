import { createAction, props } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = '[Shopping List] Add Ingredient';
export const ADD_INGREDIENTS = '[Shopping List] Add Ingredients';
export const UPDATE_INGREDIENT = '[Shopping List] Update Ingredient';
export const DELETE_INGREDIENT = '[Shopping List] Delete Ingredient';
export const START_EDIT = '[Shopping List] Start Edit';
export const STOP_EDIT = '[Shopping List] Stop Edit';

export const AddIngredient = createAction(ADD_INGREDIENT, props <any>() );
export const AddIngredients = createAction(ADD_INGREDIENTS, props <any>());
export const UpdateIngredient = createAction(UPDATE_INGREDIENT, props<any>());
export const DeleteIngredient = createAction(DELETE_INGREDIENT);
export const StartEdit = createAction(START_EDIT, props<any>());
export const StopEdit = createAction(STOP_EDIT);
console.log(AddIngredient);
