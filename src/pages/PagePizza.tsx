import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IPizza } from '../types/interfaces'

const PagePizza = () => {
	const [pizza, setPizza] = useState<IPizza>()
	const { id } = useParams()

	useEffect(() => {
		async function fetchPizza() {
			try {
				const { data } = await axios.get(
					`https://642fdcffb289b1dec4bbc3a8.mockapi.io/items/${id}`
				)
				setPizza(data)
			} catch (error) {
				console.log(error)
			}
		}

		fetchPizza()
	}, [])

	if (!pizza) {
		return <>Загрузка...</>
	}

	return (
		<div className='pagePizza'>
			<div className='pizzaInfo'>
				<img src={pizza.imageUrl} />
				<h2>{pizza.title}</h2>
				<h3>Цена: {pizza.price} ₽</h3>
			</div>
			<div className='pizzaDescr'>
				<h2>Описание: </h2>
				<h3>{pizza.description}</h3>
				<Link to='/'>
					<button className='button button--outline'>Назад</button>
				</Link>
			</div>
		</div>
	)
}

export default PagePizza
