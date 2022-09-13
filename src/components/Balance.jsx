import React, { useContext } from 'react';
import '../App.css';
import GlobalState from '../context/GlobalState';

const Balance = () => {
	const { transactions } = useContext(GlobalState);
	const amount = transactions.map((transaction) => transaction.amount);
	const total = amount.reduce((a, b) => (a += b), 0).toFixed(2);

	/**
	 * * here we are using reduce() to add all number and toFixed to get two decimal number at last (400.00)
	 */
	return (
		<div>
			<h4>Your Balance</h4>
			<h1>&#8377;{total}</h1>
		</div>
	);
};

export default Balance;
