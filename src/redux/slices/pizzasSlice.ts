import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { IPizzaBlock } from '../../types/interfaces'
import { ISort } from './filterSlice'

type FetchParams = {
	currentPage: number
	categoryId: number
	searchValue: string
	sort: ISort
}

export const fetchPizzas = createAsyncThunk<IPizzaBlock[], FetchParams>(
	'pizzas/fetchPizzasStatus',
	async params => {
		const { currentPage, categoryId, sort, searchValue } = params
		const { data } = await axios.get<IPizzaBlock[]>(
			`https://642fdcffb289b1dec4bbc3a8.mockapi.io/items?page=${currentPage}&limit=4&${
				categoryId > 0 ? `category=${categoryId}` : ''
			}${searchValue && `&search=${searchValue}`}&sortBy=${
				sort.sortProperty
			}&order=desc`
		)
		return data
	}
)

interface IPizzasState {
	items: IPizzaBlock[]
	status: 'loading' | 'error' | 'success'
}

const initialState: IPizzasState = {
	items: [],
	status: 'loading',
}

export const pizzasSlice = createSlice({
	initialState,
	name: 'pizzas',
	reducers: {
		setItems(state, action: PayloadAction<IPizzaBlock[]>) {
			state.items = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(
				fetchPizzas.fulfilled,
				(state, action: PayloadAction<IPizzaBlock[]>) => {
					state.items = action.payload
					state.status = 'success'
				}
			)
			.addCase(fetchPizzas.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchPizzas.rejected, state => {
				state.status = 'error'
			})
	},
})

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer
