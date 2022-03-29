import { useCallback, useState } from 'react';

const useHttp = () => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const fetchData = useCallback(async (obj, afterFetching) => {
		setLoading(true);
		try {
			const res = await fetch(obj.url, {
				method: obj.method || 'GET',
				body: obj.body || null,
				signal: obj.signal || null,
			});
			if (!res.ok) {
				throw new Error('Something went wrong');
			}

			const resData = await res.json();

			await afterFetching(resData);
		} catch (error) {
			if (error.name === 'AbortError') {
				console.log(error.name);
				throw error;
			} else {
				setError(error);
			}
		}
		setLoading(false);
	}, []);

	return {
		loading,
		fetchData,
		error,
	};
};

export default useHttp;
