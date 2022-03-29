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
			});

			if (!res.ok) {
				throw new Error('Something went wrong');
			}

			const resData = await res.json();

			if (afterFetching) {
				afterFetching(resData);
			}
		} catch (error) {
			console.log(error);
			setError(error);
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
