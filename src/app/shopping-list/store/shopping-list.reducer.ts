import { createReducer, on, ReducerManager } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editedIngredient: null,
  editedIngredientIndex: -1
};

const reducer = createReducer(initialState,  
  on(ShoppingListActions.AddIngredient, (state, action) => {
    return {
      ...state,
      ingredients: [...state.ingredients, action.Ingredient]
    };
  }),
  on(ShoppingListActions.AddIngredients, (state, action) => {
    return {
      ...state,
      ingredients: [...state.ingredients, ...action.payload]
    };
  }),
  on(ShoppingListActions.UpdateIngredient, (state, action) => {
    const ingredient = state.ingredients[state.editedIngredientIndex];
    const updatedIngredient = {
      ...ingredient,
      ...action.payload
    };
    const updatedIngredients = [...state.ingredients];
    updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

    return {
      ...state,
      ingredients: updatedIngredients,
      editedIngredientIndex: -1,
      editedIngredient: null
    };
  }),
  on(ShoppingListActions.DeleteIngredient, (state) => {
    return {
      ...state,
      ingredients: state.ingredients.filter((ig, igIndex) => {
        return igIndex !== state.editedIngredientIndex;
      }),
      editedIngredientIndex: -1,
      editedIngredient: null
    };
  }),
  on(ShoppingListActions.StartEdit, (state, action) => {
    return {
      ...state,
      editedIngredientIndex: action.payload,
      editedIngredient: { ...state.ingredients[action.payload] }
    };
  }),
  on(ShoppingListActions.StopEdit, (state) => {
    return {
      ...state,
      editedIngredient: null,
      editedIngredientIndex: -1
    };
  }),
);

export function shoppingListReducer(state, action) {
  return reducer(state, action);
}

