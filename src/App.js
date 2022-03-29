import Header from './components/LAYOUT/Header';
import Quotes from './pages/Quotes';
import { Routes, Route } from 'react-router-dom';
import AddQuote from './pages/AddQuote';
import QuoteDetails from './pages/QuoteDetails';
const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Quotes />} />
				<Route path='/addNew' element={<AddQuote />} />
				<Route path='/quotes/:id' element={<QuoteDetails />} />
			</Routes>
		</>
	);
};

export default App;
