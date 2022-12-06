import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';


function App() {
    return (
        <GlobalProvider>
            <div className="container ">
                <Header />
                <div className="column">
                    <Balance />
                    <IncomeExpenses />
                    <AddTransaction />
                </div>
                <div className="column">
                    <TransactionList />
                </div>
            </div>

        </GlobalProvider>
    );
}

export default App;
