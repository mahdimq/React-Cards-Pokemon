import { useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';

const useAxios = (url) => {
	const [cards, setCards] = useState([]);

	// after the first render, fetch our data

	const getData = async (name) => {
		try {
			const res = await axios.get(name ? url + name : url);
			setCards((cards) => [...cards, { ...res.data, id: uuid() }]);
		} catch (error) {
			throw new Error(error);
		}
	};

	// Clean up the state, used by remove button
	const cleanup = () => setCards([]);

	return [cards, getData, cleanup];
};

export default useAxios;
