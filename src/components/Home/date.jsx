import React from 'react';
import CountdownTimer from './timer';

const Try = () => {
  const deadline = new Date('2024-02-15');

  return (
    <div className="app">
      <CountdownTimer deadline={deadline} />
    </div>
  );
};

export default Try;
