import React, { useState } from 'react';

const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);

	const handleText = (e) => {
		setText(e.target.value);
		console.log(e.target.value);
	};

	const handleAmount = (e) => {
		setAmount(e.target.value);
		console.log(e.target.value);
	};

	return (
		<div>
			<h3>Add new transaction</h3>
			<form>
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
				<button className="btn">Add transaction</button>
			</form>
		</div>
	);
};

export default AddTransaction;
