import { useWhyDidYouUpdate } from 'ahooks'
import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../../redux/slices/filterSlice'
import { filterSelector } from '../../redux/slices/selectors'

const categories = [
	'Все',
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые',
]

const Categories = memo(() => {
	const { categoryId } = useSelector(filterSelector)
	const dispatch = useDispatch()

	const onChangeCategory = useCallback((id: number) => {
		dispatch(changeCategory(id))
	}, [])

	useWhyDidYouUpdate('Categories', { categoryId, onChangeCategory })

	return (
		<div className='categories'>
			<ul>
				{categories.map((item, id) => (
					<li
						onClick={() => onChangeCategory(id)}
						className={categoryId === id ? 'active' : ''}
						key={id}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
})

export default Categories
