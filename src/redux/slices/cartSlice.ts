import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IItem } from '../../types/interfaces'

interface ICartState {
	items: IItem[]
	totalPrice: number
}

const initialState: ICartState = {
	items: [],
	totalPrice: 0,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<IItem>) => {
			const findItem = state.items.find(obj => obj.id === action.payload.id)

			if (findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				})
			}
			state.totalPrice = state.items.reduce((sum, item) => {
				return sum + item.price * item.count
			}, 0)
		},
		minusItem(state, action: PayloadAction<string>) {
			const findItem = state.items.find(obj => obj.id === action.payload)
			if (findItem) {
				findItem.count--
			}
			state.totalPrice = state.items.reduce((sum, item) => {
				return sum + item.price * item.count
			}, 0)
		},
		removeItem(state, action: PayloadAction<string>) {
			state.items = state.items.filter(item => item.id !== action.payload)

			state.totalPrice = state.items.reduce((sum, item) => {
				return sum + item.price * item.count
			}, 0)
		},
		clearItems(state) {
			state.items = []
			state.totalPrice = 0
		},
	},
})

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions

export default cartSlice.reducer
