import React from 'react';

const Statistics = ({ statistics }) => {
  return (
    <div>
      <h3>Statistics</h3>
      <p>Total Sale Amount: {statistics.totalAmount}</p>
      <p>Total Sold Items: {statistics.soldItems}</p>
      <p>Total Not Sold Items: {statistics.notSoldItems}</p>
    </div>
  );
};

export default Statistics;
