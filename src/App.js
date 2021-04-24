import './App.css';
import {Header, Balance, AccountSummary, TransactionHistory, AddTransaction, Display} from './components';

function App() {
    return (
        // <TransactionContext.Provider>
        <div className='container'>
            <div className='chart_container wrapper' >
                <Display/>
            </div>

            <div className='app_container wrapper'>
                <Header />
                <Balance />
                <AccountSummary />
                <TransactionHistory />
                <AddTransaction />
            </div>
        </div >
        // </TransactionContext.Provider>
    );
}

export default App;