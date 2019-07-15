import React from 'react'
import ReactDOM from 'react-dom'
import PracticeUseState from './PracticeUseState'
import PracticeUseInput from './PracticeUseInput'

const App = () => {
  return (
    <div className="App">
      {/* <PracticeUseState /> */}
      <PracticeUseInput />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(
  <App />,
  rootElement
)
