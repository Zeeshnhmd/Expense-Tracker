import React, { useContext } from 'react';
import GlobalState from '../context/GlobalState';

const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalState);

	const sign = transaction.amount < 0 ? '-' : '+';
	return (
		<div>
			<li className={transaction.amount < 0 ? 'minus' : 'plus'}>
				{transaction.text}
				<span>
					{sign}&#8377; {Math.abs(transaction.amount)}
				</span>
				<button
					onClick={() => deleteTransaction(transaction.id)}
					className="delete-btn"
				>
					x
				</button>
			</li>
		</div>
	);
};

export default Transaction;
