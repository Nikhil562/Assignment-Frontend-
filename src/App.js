import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

const App = () => {
  const [month, setMonth] = useState('March');
  const [data, setData] = useState({ transactions: [], statistics: {}, barChart: [], pieChart: [] });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/combined?month=${month}`);
      setData(response.data);
    };
    fetchData();
  }, [month]);

  return (
    <div>
      <select value={month} onChange={e => setMonth(e.target.value)}>
        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
      <TransactionsTable transactions={data.transactions} />
      <Statistics statistics={data.statistics} />
      <BarChart data={data.barChart} />
      <PieChart data={data.pieChart} />
    </div>
  );
};

export default App;
