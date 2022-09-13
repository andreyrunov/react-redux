import { combineReducers } from 'redux'
import { listReducer } from './list.reducer'
import { favouriteReducer } from './favourite.reducer'

export const rootReducer = combineReducers({
	list: listReducer,
	favourites: favouriteReducer,
})
