import { FC, memo, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ISort, changeSort } from '../../redux/slices/filterSlice'
import { filterSelector } from '../../redux/slices/selectors'

const list: ISort[] = [
	{ name: 'популярности', sortProperty: 'rating' },
	{ name: 'цене', sortProperty: 'price' },
	{ name: 'алфавиту', sortProperty: 'title' },
]

const Sort: FC = memo(() => {
	const { sort } = useSelector(filterSelector)
	const dispatch = useDispatch()
	const [popup, setPopup] = useState(false)
	const sortRef = useRef<HTMLDivElement>(null)

	const onChangeSort = (item: ISort) => {
		dispatch(changeSort(item))
		setPopup(!popup)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (!sortRef.current?.contains(event.target as Node)) {
				setPopup(false)
			}
		}
		document.body.addEventListener('click', handleClickOutside)

		return () => {
			document.body.removeEventListener('click', handleClickOutside)
		}
	}, [])

	return (
		<div ref={sortRef} className='sort'>
			<div className='sort__label'>
				<svg
					width='10'
					height='6'
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				></svg>
				<b>Сортировка по:</b>
				<span onClick={() => setPopup(!popup)}>{sort.name}</span>
			</div>
			<div className='sort__popup'>
				{popup && (
					<ul>
						{list.map((item, id) => (
							<li
								key={id}
								onClick={() => onChangeSort(item)}
								className={
									sort.sortProperty === item.sortProperty ? 'active' : ''
								}
							>
								{item.name}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
})

export default Sort
