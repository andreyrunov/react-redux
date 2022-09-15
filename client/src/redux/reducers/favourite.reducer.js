import { ADD_TO_FAVOURITE } from '../types'

export function favouriteReducer(state = [], action) {
	const { type } = action
	switch (type) {
		case ADD_TO_FAVOURITE: {
			const {payload: id} = action // вытаскиваем из action payload и переименовываем его в id
			return [...state, id] // закидываем новые данные с избранным к имеющимся
		}
		default: {
			return state
		}
	}
}
