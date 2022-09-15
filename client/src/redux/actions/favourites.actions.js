import {ADD_TO_FAVOURITE} from '../types'

export const addToFavourite = (id) => ({
	type: ADD_TO_FAVOURITE,
    payload: id,
})