import React, { useState } from 'react'
import styled from 'styled-components';
let Container = styled.div`
    display:flex;
    flex-direction : column;
    align-items:center;
    margin: 10px;
    width:100%;

 
`;
let BalancedBox = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
    font-size:18px;
    font-weight:1000;
    
`
let BalancedBoxButton = styled.div`
    color:white;
    background-color:black;
    text-align:center;
    border : none;
    border-radius :5px;
    padding:7px 8px;
    cursor:pointer;
    font-weight:bold;
    font-size:15px
`
let AddTransactionContainer = styled.div`
    display:flex;
    flex-direction:column;
    border : 1px solid #e6e8e9;
    gap:10px;
    width:100%;
    padding:15px 20px;
    margin:30px 20px;
    & input {
        padding:10px;
  }`;

let RadioBox = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;`;

    let ExpenseIncome = styled.div`
        width:360px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        margin: 15px 0 16px 0;
    `

    let Remaining = styled.span`
        width:43%;
        border : 1px solid #e6e8e9;
        padding:5px  0 15px 17px;     
        &  span{
            color:red;
            font-weight:600;
            color : ${props => props.IsIncome ? "green" : "red" }
        }`;

     

//HIDING AND SHOWING FROM FIELDS FUNCTION ///////////////////////////
let AddTransactionView = (props) => {
    let [amount,setAmount] = useState();
    let [desciption,setDescription] = useState();
    let [type,setType] = useState('EXPENSE');

    let SaveDetailButton = () =>{
        props.AddTransaction({amount : Number(amount) ,desciption,type,id:Date.now()})
        props.ToggleAddingTransition();
    }
    return(
    <AddTransactionContainer>
        <input type="number" name="amount" placeholder='Amount'
         value={amount} onChange={(e)=> setAmount(e.target.value)}/>

        <input type="text" name="description" placeholder='Description' 
         value={desciption} onChange={(e)=> setDescription(e.target.value)}/>

        <RadioBox>

        <input type="radio" name="type" id="expense" value="EXPENSE"
         onChange={(e) => setType( e.target.value)} checked={type ==="EXPENSE"}/>
        <label htmlFor="expense">Expense</label>

        <input type="radio" name="type" id="income" value="INCOME" 
         onChange={(e) => setType( e.target.value)} checked={type ==="INCOME"}/>
        <label htmlFor="income">Income</label>
        </RadioBox>
        <BalancedBoxButton onClick={SaveDetailButton}>Add Transaction</BalancedBoxButton>
    </AddTransactionContainer> 
    )

}

let OverviewComponent = (props) => {

    let [IsAddingTransition,ToggleAddingTransition] = useState(false);
    return(
            <Container>
                <BalancedBox>
                    Balance : ${props.income - props.expense};
                    <BalancedBoxButton onClick={()=> ToggleAddingTransition(!IsAddingTransition) } >{IsAddingTransition ? 'cancel' : 'Add'}</BalancedBoxButton>
                </BalancedBox>
                {IsAddingTransition && <AddTransactionView  ToggleAddingTransition={ToggleAddingTransition} AddTransaction={props.AddTransaction}/> }
                <ExpenseIncome>
                        <Remaining IsIncome={false}>
                            <p>Expense</p>
                            <span>${props.expense}</span>
                        </Remaining>
                        <Remaining IsIncome={true}>
                            <p>Income</p>
                            <span>${props.income}</span>
                        </Remaining>
                    </ExpenseIncome>   
                                
            </Container>   

    )
}

export default OverviewComponent;