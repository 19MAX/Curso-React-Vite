import { useState } from 'react'
import './App.css'
import {Button} from '../components'
function App() {
  const [count, setCount] = useState(0)

  //batching

  const countMore = () => {
    setCount ((count) => count + 1)
    setCount ((count) => count + 1)
    setCount ((count) => count + 1)
    setCount ((count) => count + 1)
    setCount ((count) => count + 1)
  }

  return (
    <>
    <Button label={'Contador es : ' + count} parentMethod={countMore} />
    </>
  )
}

export default App
