import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';
import TransactionForm from '../components/TransactionForm.js';
import TransactionList from '../components/TransactionList.js';
import Container from '@mui/material/Container';

export default function Home() {
    
        const [transactions,setTransactions] = useState([]);
        const [editTransaction, setEditTransaction] = useState({});
        
        useEffect(() => {
          fetchTransactions()     
        }, []);
      
         async function fetchTransactions(){
          const res = await fetch('http://localhost:4000/transaction')
          const {data} = await res.json();
          setTransactions(data);
        }
      

  return (
    <Container>
    <TransactionForm fetchTransactions={fetchTransactions}
    editTransaction={editTransaction}
    />
    <TransactionList transactions={transactions}
    fetchTransactions={fetchTransactions}
    setEditTransaction={setEditTransaction}
    /> 
    </Container>  
  )
}
