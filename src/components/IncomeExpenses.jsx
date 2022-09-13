import React, { useContext } from 'react';
import GlobalState from '../context/GlobalState';

const IncomeExpenses = () => {
	const { transactions } = useContext(GlobalState);
	const amount = transactions.map((transaction) => transaction.amount);
	const total = amount.reduce((a, b) => (a += b), 0).toFixed(2);

	/**
	 * * here we are using toFixed(2) because
	 */

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus">+&#8377;{total}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="money minus">-&#8377;0.00</p>
			</div>
		</div>
	);
};

export default IncomeExpenses;
