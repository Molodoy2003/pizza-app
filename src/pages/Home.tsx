import { FC, useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { SearchContext } from '../App'
import Categories from '../components/categories/Categories'
import Pagination from '../components/pagination/Pagination'

import PizzaBlock from '../components/pizza-block/PizzaBlock'
import Sort from '../components/sort/Sort'
import { useAppDispatch } from '../hooks/hooks'
import { fetchPizzas } from '../redux/slices/pizzasSlice'
import { filterSelector, pizzasSelector } from '../redux/slices/selectors'
import { IPizzaBlock } from '../types/interfaces'

const Home: FC = () => {
	const { searchValue } = useContext(SearchContext)
	const { categoryId, sort, currentPage } = useSelector(filterSelector)
	const { items } = useSelector(pizzasSelector)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchPizzas({ currentPage, categoryId, sort, searchValue }))
	}, [categoryId, sort, searchValue, currentPage])

	return (
		<div>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>

			<div className='content__items'>
				{items.map((item: IPizzaBlock) => (
					<PizzaBlock {...item} key={item.id} />
				))}
			</div>
			<Pagination />
		</div>
	)
}

export default Home
