export interface IPizza {
	imageUrl: string
	price: number
	title: string
	description: string
}

export interface IItem {
	id: string
	title: string
	imageUrl: string
	count: number
	price: number
	type: string
	size: number
}

export interface ISortItem {
	name: string
	sortProperty: string
}

export interface IPizzaBlock {
	id: string
	title: string
	price: number
	imageUrl: string
	sizes: number[]
	types: number[]
}
