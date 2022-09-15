import { ADD_CATS, INIT_LIST } from '../types'

export const addList = (newCats) => ({
	type: ADD_CATS,
	payload: newCats,
})

export const initList = (list) => ({
	type: INIT_LIST,
	payload: list,
})
