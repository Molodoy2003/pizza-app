import { FC } from 'react'
import { Link } from 'react-router-dom'

const CartEmpty: FC = () => {
	return (
		<div style={{ textAlign: 'center', height: '400px' }}>
			<h1>Корзина пустая 😕</h1>
			<h4 style={{ marginBottom: '50px' }}>
				Вероятнее всего, вы не заказывали еще пиццу. <br /> Для того, чтобы
				заказать пиццу, перейдите на главную страницу
			</h4>
			<Link to='/'>
				<button className='button button--outline button--add go-back-btn'>
					<span>Вернуться назад</span>
				</button>
			</Link>
		</div>
	)
}

export default CartEmpty
