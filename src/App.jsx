import { useCallback, useMemo, useState } from 'react'
import './App.css'
import Button from './Button'
import ShowCount from './ShowCount'
import Title from './Title'

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1(prevCount => prevCount + 1)
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2(prevCount => prevCount + 5)
  }, []);

  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1;
    return count1 % 2 === 0;
  }, [count1])

  return (
    <div className="App">
      <Title />
      <ShowCount count={count1} title='Counter 1'></ShowCount>
      <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span> <br />
      <Button handleClick={incrementByOne}>Increment by one</Button>
      <ShowCount count={count2} title='Counter 2'></ShowCount>
      <Button handleClick={incrementByFive}>Increment by five</Button>
    </div>
  )
}

export default App
