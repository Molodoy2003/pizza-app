import { CircleX } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice'
import { IItem } from '../../types/interfaces'

const CartItem = ({ id, title, imageUrl, count, price, type, size }: IItem) => {
	const dispatch = useDispatch()

	const onClickPlus = () => {
		dispatch(addItem({ id }))
	}

	const onClickMunus = () => {
		dispatch(minusItem(id))
	}

	const onClickRemove = () => {
		dispatch(removeItem(id))
	}

	return (
		<div className='cart__item'>
			<div className='cart__item-img'>
				<img className='pizza-block__image' src={imageUrl} alt='Pizza' />
			</div>
			<div className='cart__item-info'>
				<h3>{title}</h3>
				<p>
					{type} тесто, {size} см.
				</p>
			</div>
			<div className='cart__item-count'>
				<button
					disabled={count === 1}
					onClick={() => onClickMunus()}
					className='button button--outline button--circle cart__item-count-minus'
				>
					-
				</button>
				<b>{count}</b>
				<div
					onClick={() => onClickPlus()}
					className='button button--outline button--circle cart__item-count-plus'
				>
					+
				</div>
			</div>
			<div className='cart__item-price'>
				<b>{price * count} ₽</b>
			</div>
			<div className='cart__item-remove'>
				<CircleX onClick={() => onClickRemove()} className='remove-item' />
			</div>
		</div>
	)
}

export default CartItem
