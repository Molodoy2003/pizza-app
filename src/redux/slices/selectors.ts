import { RootState } from '../store'

export const filterSelector = (state: RootState) => state.filter
export const cartSelector = (state: RootState) => state.cart
export const pizzasSelector = (state: RootState) => state.pizzas
