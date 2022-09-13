import { createContext, useReducer } from 'react';
import appReducer from '../reducer/AppReducer';

const initialState = {
	transactions: [
		{ id: 1, text: 'Flower', amount: -20 },
		{ id: 2, text: 'Salary', amount: 300 },
		{ id: 3, text: 'Book', amount: -10 },
		{ id: 4, text: 'Camera', amount: 150 },
	],
};

export const GlobalState = createContext();

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return (
		<GlobalState.Provider value={{ ...state }}>{children}</GlobalState.Provider>
	);
};
