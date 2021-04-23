import './App.css';
import UI from './UI_Exp';
import {TransactionContext} from './transContext';

function App() {
    return (
        // <TransactionContext.Provider>
        <div>
            <UI/>            
        </div>
        // </TransactionContext.Provider>
    );
}

export default App;