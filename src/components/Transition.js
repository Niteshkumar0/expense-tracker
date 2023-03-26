import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useState } from 'react';
let Container = styled.div`
  display:flex;
  flex-direction : column;
  align-items:center;
  align-items:flex-start;
  width:100%;
  gap:10px;
  font-weight:bold;
  & input {
    padding:10px 12px;
    border-radius:12px;
    background:#e6e8e9;
    border: 1px solid #e6e8e9;
    outline:none;
    width:100%;
  }
 
`;
let Cell = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    padding:10px 15px;
    border: 1px solid #e6e8e9;
    font-size:14px;
    border-radius:2px;
    justify-content:space-between;
    border-right:4px solid ${(props) => (props.isExpense ? "red" : "green")}
`


let TransactionCell = (props) => {
  return(
    <Cell isExpense={props.payload?.type === 'EXPENSE'}>
      <span>{props.payload.desciption}</span>
      <span>{props.payload.amount}</span>
    </Cell>
  );
}
let Transition = (props) => {
  let [searchText,updateSearchText] = useState("")
  let [filteredTransaction,updateTxn] = useState(props.Transaction)

  let filterData = (searchText) =>{
    if (!searchText || !searchText.trim().length) {
      updateTxn(props.Transaction);
      return
    } 
    let txn = [...props.Transaction];
    txn=txn.filter((payload)=> payload.desciption.toLowerCase().includes(searchText.toLowerCase().trim()))
    updateTxn(txn)
  } 
  useEffect(()=>filterData(searchText),[props.Transaction])
  return (
    <Container>
    Transaction
    <input placeholder='search' value={searchText}
    onChange={(e)=> {
      updateSearchText(e.target.value);
      filterData(e.target.value);}
    }/>
    {filteredTransaction?.length
    ?filteredTransaction.map((payload) => <TransactionCell payload={payload}/>) 
    : ""}
</Container>
  )
}
 export default Transition;