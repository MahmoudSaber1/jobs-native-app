import { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';

const useFetch = (endpoint, query) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const options = {
		method: 'GET',
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		headers: {
			'X-RapidAPI-Key': 'fa0c5bf4c6msh6eedafc2be67254p1bc974jsn1ccc1ca5450a',
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
		},
		params: { ...query },
	};

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await axios.request(options);

			setData(response.data.data);
			setIsLoading(false);
		} catch (error) {
			Alert.alert('Something went wrong, please try again');
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		setIsLoading(true);
		fetchData();
	};

	return { data, isLoading, error, refetch };
};

export default useFetch;
