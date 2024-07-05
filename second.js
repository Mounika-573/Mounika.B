import React from 'react';
import {Component} from 'react';
class ExpenseEntryItem extends React.Component{
    render(){
        return(
            <div>
                <div><b>Item:</b><em>Mango juice</em></div>
                <div><b>Amount:</b><em>30.0</em></div>
                <div><b>Spend date:</b><em>2004.07.01</em></div>
                <div><b>Category:</b><em>Food</em></div>
            </div>
        );
    }
}
export default ExpenseEntryItem;