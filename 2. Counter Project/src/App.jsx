import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setcount] = useState(0)
  let plus = (() => {
    setcount(count + 1);

  })

  let minus = (() => {
    if (count == 0) {
      return count
    }
    else {
      setcount(count - 1)
    }
  })

  return (
    <>
      <button onClick={plus} style={{ border: "1px solid black" }}>+</button>
      <h1>{count}</h1>
      <button onClick={minus} style={{ border: "1px solid black" }}>-</button>
    </>
  )
}
export default App