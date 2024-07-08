import { FC } from 'react'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
	return (
		<div style={{ textAlign: 'center', height: '400px' }}>
			<h1>Ничего не найдено :(</h1>
			<h3 style={{ marginBottom: '15px' }}>
				К сожалению, данная страница отсутствует в нашем интернет-магазине
			</h3>
			<Link to='/'>
				<button className='button'>Назад</button>
			</Link>
		</div>
	)
}

export default NotFound
