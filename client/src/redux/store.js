import { createStore } from 'redux'
import { rootReducer } from './reducers/root.reducer'
import { composeWithDevTools } from '@redux-devtools/extension' // @redux-devtools/extension - устанавливаем через npm i @redux-devtools/extension

const initialState = {
	list: [],
	favourites: [],
}
// composeWithDevTools - используем для передачи данных в redux devtools
export const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools()
)
