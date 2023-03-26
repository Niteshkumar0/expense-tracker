import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import OverviewComponent from './Overview';
import Transition from './Transition';
let Container = styled.div`
  display:flex;
  flex-direction : column;
  align-items:center;
  width:360px;
  margin: 30px 0 10px;
 
`;
let HomeComponent = (props) => {
    let [Transaction,UpdateTransaction] = useState([]);
    let [expense,updateExpense] = useState(0);
    let [income,updateincome] = useState(0);

    let AddTransaction = (payload) =>{
        let transactionArray = [...Transaction]
        transactionArray.push(payload);
        UpdateTransaction(transactionArray)
    }

    let calculateBalance = () =>{
        let exp = 0;
        let inc = 0;
        Transaction.map((payload)=>{
            payload.type === "EXPENSE"? (exp = exp + payload.amount) : (inc= inc+ payload.amount);
        })
        updateExpense(exp);
        updateincome(inc)
    }
    useEffect(() => calculateBalance(), [AddTransaction]);
    return(
        
            <Container>
                <OverviewComponent AddTransaction={AddTransaction} expense={expense} income={income}/>
                <Transition Transaction={Transaction}/>

            </Container>
            

    )
}

export default HomeComponent;