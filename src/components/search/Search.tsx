import { SearchIcon, X } from 'lucide-react'
import { useContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { SearchContext } from '../../App'
import styles from './Search.module.scss'

const Search = () => {
	const inputRef = useRef<HTMLInputElement>(null)
	const { searchValue, setSearchValue } = useContext(SearchContext)
	const location = useLocation()

	const onClickClear = () => {
		setSearchValue('')
		inputRef.current?.focus()
	}

	return (
		<>
			{location.pathname !== '/cart' && (
				<div className={styles.search}>
					<SearchIcon size={15} className={styles.searchIcon} />
					<input
						ref={inputRef}
						value={searchValue}
						onChange={e => setSearchValue(e.target.value)}
						type='text'
						placeholder='Поиск пиццы...'
					/>
					{searchValue && (
						<X
							onClick={() => onClickClear()}
							className={styles.close}
							size={19}
						/>
					)}
				</div>
			)}
		</>
	)
}

export default Search
