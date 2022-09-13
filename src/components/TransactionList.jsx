import React, { useContext } from 'react';
import GlobalState from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
	const { transactions } = useContext(GlobalState);
	console.log(transactions);
	return (
		<>
			<h3>History</h3>
			<ul className="list">
				{transactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction} />
				))}
			</ul>
		</>
	);
};

export default TransactionList;
