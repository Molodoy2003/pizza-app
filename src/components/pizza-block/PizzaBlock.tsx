import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem } from '../../redux/slices/cartSlice'
import { RootState } from '../../redux/store'
import { IPizzaBlock } from '../../types/interfaces'

const typesNames = ['тонкое', 'традиционное']

const PizzaBlock = ({
	id,
	title,
	price,
	imageUrl,
	sizes,
	types,
}: IPizzaBlock) => {
	const cartItem = useSelector((state: RootState) =>
		state.cart.items.find(obj => obj.id === id)
	)

	const [activeType, setActiveType] = useState(0)
	const [activeSize, setActiveSize] = useState(0)
	const dispatch = useDispatch()

	const addedCount = cartItem ? cartItem.count : 0

	const onClickAdd = () => {
		const item = {
			id,
			title,
			price,
			imageUrl,
			type: typesNames[activeType],
			size: sizes[activeSize],
			count: 0,
		}
		dispatch(addItem(item))
	}

	return (
		<div>
			<div className='pizza-block'>
				<Link to={`/pizza/${id}`}>
					<img className='pizza-block__image' src={imageUrl} alt='Pizza' />
				</Link>
				<h4 className='pizza-block__title'>{title}</h4>
				<div className='pizza-block__selector'>
					<ul>
						{types.map((typeId: number) => (
							<li
								key={typeId}
								onClick={() => setActiveType(typeId)}
								className={activeType === typeId ? 'active' : ''}
							>
								{typesNames[typeId]}
							</li>
						))}
					</ul>
					<ul>
						{sizes.map((size: number, id: number) => (
							<li
								key={id}
								onClick={() => setActiveSize(id)}
								className={activeSize === id ? 'active' : ''}
							>
								{size} см.
							</li>
						))}
					</ul>
				</div>
				<div className='pizza-block__bottom'>
					<div className='pizza-block__price'>от {price} ₽</div>
					<div
						onClick={onClickAdd}
						className='button button--outline button--add'
					>
						<svg
							width='12'
							height='12'
							viewBox='0 0 12 12'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						></svg>
						<span>Добавить</span>
						<i>{addedCount}</i>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PizzaBlock
