import React, { useState } from 'react'

const App = () => {
  let [val,setvalue] = useState()
  let handleInput = (e) => {
    setvalue(e.target.value)
    console.log(val)
  }
  return (
    <>
      <input type="text"  onChange={handleInput}/>
      <p>{val}</p>
    </>
  )
}

export default App