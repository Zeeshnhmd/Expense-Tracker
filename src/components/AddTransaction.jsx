import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import GlobalState from '../context/GlobalState';

const AddTransaction = () => {
	const { addTransaction } = useContext(GlobalState);
	const [text, setText] = useState('');
	const [amount, setAmount] = useState('');

	const handleText = (e) => {
		setText(e.target.value);
	};

	const handleAmount = (e) => {
		setAmount(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: uuidv4(),
			text,
			amount: +amount,
		};
		console.log(newTransaction);
		addTransaction(newTransaction);
		setText('');
		setAmount('');
	};

	console.log('text', text);
	console.log('amount', amount);

	return (
		<div>
			<h3>Add new transaction</h3>
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						value={text}
						onChange={handleText}
						type="text"
						placeholder="Enter text..."
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						value={amount}
						onChange={handleAmount}
						type="number"
						placeholder="Enter amount..."
					/>
				</div>
				<button type="submit" className="btn" disabled={!text || !amount}>
					Add transaction
				</button>
			</form>
		</div>
	);
};

export default AddTransaction;
