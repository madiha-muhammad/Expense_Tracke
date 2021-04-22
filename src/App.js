import './App.css';

function App() {
    return (
        <div className='container'>
            <div className='app_container wrapper'>
                <h1 className='app_name' > Expense Tracker </h1>

                <div className='balance_wrap'>
                    <span className='txt' > YOUR BALANCE </span>
                    <span className='blnc' > $260 .00 </span>
                </div>

                <div className='exp_container' >
                    <div className='exp_wrap' >
                        <span className='txt' > INCOME </span>
                        <span className='incom' > $500 .00 </span>
                    </div>

                    <div className='v_line' ></div>
                    <div className='exp_wrap' >

                        <span className='txt' > EXPENSE </span>
                        <span className='exp' > $240 .00 </span>
                    </div>
                </div>

                <div className='list_container'>
                    <div className='header'>
                        <span>History</span>
                    </div>
                    <div className='h_line'></div>
                    <ul className='list_transaction'>
                        <li>
                            <span>Cash</span>
                            <span>+500</span>
                        </li>
                        <li>
                            <span>Cash</span>
                            <span>+500</span>
                        </li>
                        <li>
                            <span>Cash</span>
                            <span>+500</span>
                        </li>
                    </ul>
                </div>

                <form className='transcation_frm'>
                    <div className='list_container'>
                        <div className='header'>
                            <span>Add New Transaction</span>
                        </div>
                        <div className='h_line'></div>
                        <span className='header2' required>Enter Description</span>
                        <input className='Input' type='text' autofocus='true' required />
                        <span className='header2'>Enter Amount</span>
                        <input className='Input' type='number' required/>
                        <a className='btn_submit'>
                            <span>Add Transaction&nbsp;&nbsp;&nbsp;</span>
                            <svg
                                className='rotate'
                                xmlns="http://www.w3.org/2000/svg"
                                width="18px"
                                height="18px"
                                viewBox="0 0 1024 1024">
                                <path d="M668.6 320c0-4.4-3.6-8-8-8h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1c-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.5-1.1.9-2.4.9-3.7zM157.9 504.2a352.7 352.7 0 0 1 103.5-242.4c32.5-32.5 70.3-58.1 112.4-75.9c43.6-18.4 89.9-27.8 137.6-27.8c47.8 0 94.1 9.3 137.6 27.8c42.1 17.8 79.9 43.4 112.4 75.9c10 10 19.3 20.5 27.9 31.4l-50 39.1a8 8 0 0 0 3 14.1l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3l-47.8 37.4C770.7 146.3 648.6 82 511.5 82C277 82 86.3 270.1 82 503.8a8 8 0 0 0 8 8.2h60c4.3 0 7.8-3.5 7.9-7.8zM934 512h-60c-4.3 0-7.9 3.5-8 7.8a352.7 352.7 0 0 1-103.5 242.4a352.57 352.57 0 0 1-112.4 75.9c-43.6 18.4-89.9 27.8-137.6 27.8s-94.1-9.3-137.6-27.8a352.57 352.57 0 0 1-112.4-75.9c-10-10-19.3-20.5-27.9-31.4l49.9-39.1a8 8 0 0 0-3-14.1l-156.8-38.3c-5-1.2-9.9 2.6-9.9 7.7l-.8 161.7c0 6.7 7.7 10.5 12.9 6.3l47.8-37.4C253.3 877.7 375.4 942 512.5 942C747 942 937.7 753.9 942 520.2a8 8 0 0 0-8-8.2z" fill="#ffffff" />
                                <rect x="0" y="0" width="1024" height="1024" fill="rgba(0, 0, 0, 0)" />
                            </svg>
                        </a>
                    </div>
                </form>
            </div>

            <div className='chart_container wrapper' > barchart </div>
        </div>
    );
}

export default App;