import { FC, createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import PagePizza from './pages/PagePizza'
import './scss/app.scss'

interface ISearchContext {
	searchValue: string
	setSearchValue: (str: string) => void
}

export const SearchContext = createContext<ISearchContext>({
	searchValue: '',
	setSearchValue: () => {},
})

const App: FC = () => {
	const [searchValue, setSearchValue] = useState('')

	return (
		<div className='wrapper'>
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<Header />
				<div className='content'>
					<div className='container'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/cart' element={<Cart />} />
							<Route path='/pizza/:id' element={<PagePizza />} />
							<Route path='*' element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</SearchContext.Provider>
		</div>
	)
}

export default App
