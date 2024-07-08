import { ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartSelector } from '../../redux/slices/selectors'
import { IItem } from '../../types/interfaces'
import Search from '../search/Search'

const Header = () => {
	const { items, totalPrice } = useSelector(cartSelector)

	const totalCount = items.reduce((sum: number, item: IItem) => {
		return sum + item.count
	}, 0)

	return (
		<div className='header'>
			<div className='container'>
				<Link to='/'>
					<div className='header__logo'>
						<img width='38' src='./pizza-logo.svg' alt='Pizza logo' />
						<div>
							<h1>React Pizza</h1>
							<p>самая вкусная пицца во вселенной</p>
						</div>
					</div>
				</Link>
				<Search />
				<Link to='/cart'>
					<div className='header__cart'>
						<div className='button button--cart'>
							<span>{totalPrice} ₽</span>
							<div className='button__delimiter'></div>
							<ShoppingCart size={17} />
							<span>{totalCount}</span>
						</div>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Header
