import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import { changePage } from '../../redux/slices/filterSlice'
import styles from './Pagination.module.scss'

const Pagination = () => {
	const dispatch = useDispatch()

	return (
		<div>
			<ReactPaginate
				className={styles.paginate}
				breakLabel='...'
				nextLabel='>'
				previousLabel='<'
				onPageChange={e => dispatch(changePage(e.selected + 1))}
				pageRangeDisplayed={4}
				pageCount={3}
				renderOnZeroPageCount={null}
			/>
		</div>
	)
}

export default Pagination
