import React from 'react';

export const AccountSummary = () => {
    return (
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
    )
}