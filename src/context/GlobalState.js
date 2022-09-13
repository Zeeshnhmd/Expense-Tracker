import { createContext, useReducer } from 'react';
import appReducer from '../reducer/AppReducer';

const initialState = {
	transactions: [
		// { id: 1, text: 'Flower', amount: -20 },
		// { id: 2, text: 'Salary', amount: 300 },
		// { id: 3, text: 'Book', amount: -10 },
		// { id: 4, text: 'Camera', amount: 150 },
	],
};

const GlobalState = createContext();

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	const deleteTransaction = (id) => {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id,
		});
	};
	const addTransaction = (transaction) => {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction,
		});
	};

	return (
		<GlobalState.Provider
			value={{ ...state, deleteTransaction, addTransaction }}
		>
			{children}
		</GlobalState.Provider>
	);
};
export default GlobalState;
