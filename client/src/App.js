import {useState} from 'react';
import {useEffect} from 'react';
import AppBar from './components/AppBar.js';
import TransactionForm from './components/TransactionForm.js';
import TransactionList from './components/TransactionList.js';
import Container from '@mui/material/Container';


function App() {
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
    <div>
      <AppBar/>
      <Container>
      <TransactionForm fetchTransactions={fetchTransactions}
      editTransaction={editTransaction}
      />
      <TransactionList transactions={transactions}
      fetchTransactions={fetchTransactions}
      setEditTransaction={setEditTransaction}
      /> 
      </Container>     
      <br/>
    </div>
  );
}

export default App;
