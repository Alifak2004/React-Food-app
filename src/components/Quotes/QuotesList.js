import { useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import OneQuote from './OneQuote';
import Loading from '../UI/Loading';
const DUMMY_QUOTES = [
	{
		id: 1,
		quote: 'If your a fuckin sicunt you can get away with anything bruhs',
		author: 'Baby Zyzz',
	},
	{
		id: 2,
		quote:
			'Every man has at least once dreamt of being the strongest man in the world ',
		author: 'CBUM',
	},
	{
		id: 3,
		quote: 'Believe it',
		author: 'Naruto Uzumaki',
	},
];

const QuotesList = () => {
	// init usehttp
	const { fetchData, error, loading } = useHttp();
	const [quotes, setQuotes] = useState([]);

	// After fetching
	const fetchedData = (data) => {
		const arr = [];
		for (const key in data) {
			arr.push({
				id: key,
				quote: data[key].title,
				author: data[key].author,
			});
		}
		setQuotes(arr);
	};

	useEffect(() => {
		fetchData(
			{
				url: 'https://react-app-955c0-default-rtdb.firebaseio.com/quotes.json',
			},
			fetchedData
		);
	}, [fetchData]);

	const quotesList = quotes.map((item) => {
		return <OneQuote item={item} key={item.id} />;
	});

	if (loading) {
		return <Loading />;
	}
	if (error) {
		return <div className='centered'>Something went Wrong</div>;
	}
	return (
		<div className='container'>
			<div className='display-6 text-dark'>Quotes</div>
			<div className='underline'></div>
			<div className='mt-4'>{quotesList}</div>
		</div>
	);
};

export default QuotesList;
