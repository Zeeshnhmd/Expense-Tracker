import React, { useContext } from 'react';
import GlobalState from '../context/GlobalState';

const TransactionList = () => {
	const { transactions } = useContext(GlobalState);
	console.log(transactions);
	return (
		<>
			<h3>History</h3>
			<ul className="list">
				<li className="minus">
					Cash <span>-$400</span>
					<button className="delete-btn">x</button>
				</li>
			</ul>
		</>
	);
};

export default TransactionList;
