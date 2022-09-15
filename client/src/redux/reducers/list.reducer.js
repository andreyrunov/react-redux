import { ADD_CATS, INIT_LIST } from '../types'

export function listReducer(state = [], action) {
	const { type, payload } = action
	switch (type) {
		case INIT_LIST: {
			return payload
		}
		case ADD_CATS: {
			return [...payload, ...state]
		}

		default: {
			return state
		}
	}
}
