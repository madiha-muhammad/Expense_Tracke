import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

export const TransactionHistory = () => {

    const {transactions} = useContext(GlobalContext);
    console.log(transactions);

    return (
        <div className='list_container'>
            <div className='header'>
                <span>History</span>
            </div>
            <div className='h_line'></div>
            <ul className='list_transaction'>
                {transactions.map((item, indx) => {
                    return (
                        <li>
                            <span>{item.desc}</span>
                            <span>{item.amount}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}