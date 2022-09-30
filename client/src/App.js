import {useState} from 'react';
import {useEffect} from 'react';
import AppBar from './components/AppBar.js';
import TransactionForm from './components/TransactionForm.js';
import TransactionList from './components/TransactionList.js';
import Container from '@mui/material/Container';


function App() {
  const [transactions,setTransactions] = useState([])
  
  useEffect(() => {
    fetchTransactions()     
  }, [])

   async function fetchTransactions(){
    const res = await fetch('http://localhost:4000/transaction')
    const {data} = await res.json();
    setTransactions(data);
  }


  return (
    <div>
      <AppBar/>
      <Container>
      <TransactionForm fetchTransactions={fetchTransactions}/>
      <TransactionList transactions={transactions}
      fetchTransactions={fetchTransactions}
      /> 
      </Container>     
      <br/>
    </div>
  );
}

export default App;
