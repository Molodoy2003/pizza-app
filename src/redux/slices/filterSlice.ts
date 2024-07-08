import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ISort {
	name: string
	sortProperty: 'rating' | 'title' | 'price'
}

interface IFilterState {
	searchValue: string
	categoryId: number
	sort: ISort
	currentPage: number
}

const initialState: IFilterState = {
	searchValue: '',
	categoryId: 0,
	sort: {
		name: 'популярности',
		sortProperty: 'rating',
	},
	currentPage: 1,
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeCategory: (state, action: PayloadAction<number>) => {
			state.categoryId = action.payload
		},
		changeSort: (state, action: PayloadAction<ISort>) => {
			state.sort = action.payload
		},
		changePage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload
		},
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload
		},
	},
})

export const { changeCategory, changeSort, changePage, setSearchValue } =
	filterSlice.actions

export default filterSlice.reducer
