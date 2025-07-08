import React from 'react'
import { useState } from 'react'

const Button = ({n2}) => {

    let [theme,setTheme] = useState("light")
    let handelin = (()=> {
        setTheme(theme == "light"? "dark": "light")
    })
  return (
    <div>
      <button onClick={handelin}>{theme},{n2}</button>
    </div>
  )
}

export default Button