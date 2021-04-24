import './App.css';
import { Header, Balance, AccountSummary, TransactionHistory, AddTransaction, Display } from './components';
import GlobalProvider from './context/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <div className='container'>
                <div className='chart_container wrapper' >
                    <Display />
                </div>

                <div className='app_container wrapper'>
                    <Header />
                    <Balance />
                    <AccountSummary />
                    <TransactionHistory />
                    <AddTransaction />
                </div>
            </div >
        </GlobalProvider>
    );
}

export default App;