import React from 'react';
//import './first.css';
import ExpenseEntryItem from './second';
import Counter from './third';
import Registration from './fourth';
import './fourth.css';
import UseEffect from './fifth';
const Add=()=>
{
    return(
        <div>
            <center>
            <h1>Hello World</h1>
            <ExpenseEntryItem></ExpenseEntryItem>
            <Counter></Counter>
            <div class="main">
            <fieldset>
                <Registration></Registration>
            </fieldset>
            </div>
            <UseEffect></UseEffect>
            </center>
           
        </div>
    );
}
export default Add;