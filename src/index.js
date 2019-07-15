import React,{ useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [item, setItem] = useState(1)
  const incrementItem = () => setItem(item + 1)
  const decrementItem = () => setItem(item - 1)
  return (
    <div className="App">
      <div>Hello {item}</div>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(
  <App />,
  rootElement
)
