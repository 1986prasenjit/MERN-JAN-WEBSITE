import React from 'react'
import CounterComponent from './CounterComponent';

const Counter = () => {
    const [count, setCount] = React.useState(0);
    function handleIncrement() {
        setCount(count + 1);
        console.log("counter render")
    }
  return (
    <div><h1 className='text-4xl'>Counter:{count}</h1>
    <div><button onClick={handleIncrement}>Increment</button></div>
    <CounterComponent name="jhon"/>
    </div>
  )
}

export default Counter