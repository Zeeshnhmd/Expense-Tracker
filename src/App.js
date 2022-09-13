import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';

function App() {
	return (
		<div>
			<Header header="Expense Tracker" />
			<div className="container">
				<Balance />
				<IncomeExpenses />
			</div>
		</div>
	);
}

export default App;
