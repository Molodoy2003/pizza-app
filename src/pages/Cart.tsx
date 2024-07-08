import { ShoppingBasket, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartEmpty from '../components/cart-empty/CartEmpty'
import CartItem from '../components/cart-item/CartItem'
import { clearItems } from '../redux/slices/cartSlice'
import { cartSelector } from '../redux/slices/selectors'
import { IItem } from '../types/interfaces'

const Cart = () => {
	const [data, setData] = useState([])
	const { items, totalPrice } = useSelector(cartSelector)
	const dispatch = useDispatch()

	const totalCount = items.reduce((sum: number, item: IItem) => {
		return sum + item.count
	}, 0)

	// useEffect(() => {
	// 	async function cartData() {
	// 		const res = await axios.get(
	// 			'https://642fdcffb289b1dec4bbc3a8.mockapi.io/cart'
	// 		)

	// 		return setData(res.data)
	// 	}

	// 	cartData()
	// }, [data])

	if (!totalPrice) {
		return <CartEmpty />
	}

	return (
		<div>
			<div className='container container--cart'>
				<div className='cart'>
					<div className='cart__top'>
						<div style={{ display: 'flex' }}>
							<ShoppingCart size={30} style={{ marginRight: '10px' }} />
							<h2 className='content__title'>Корзина</h2>
						</div>
						<div className='cart__clear'>
							<ShoppingBasket opacity={0.7} />
							<span onClick={() => dispatch(clearItems())}>
								Очистить корзину
							</span>
						</div>
					</div>
					<div className='content__items'>
						{/* {data.map(item => (
							<CartItem key={item.id} {...item} />
						))} */}
						{items.map((item: IItem) => (
							<CartItem key={item.id} {...item} />
						))}
					</div>
					<div className='cart__bottom'>
						<div className='cart__bottom-details'>
							<span>
								Всего пицц: <b>{totalCount} шт.</b>
							</span>
							<span>
								Сумма заказа: <b>{totalPrice} ₽</b>
							</span>
						</div>
						<div className='cart__bottom-buttons'>
							<Link to='/'>
								<button className='button button--outline button--add go-back-btn'>
									<span>Вернуться назад</span>
								</button>
							</Link>
							<div className='button pay-btn'>
								<span>Оплатить сейчас</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cart
