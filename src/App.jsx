import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './Display.jsx'
import TextBox from './TextBox.jsx'

function App() {
  const [messages, setMessages] = useState([])
  const [generatingOutput, setGeneratingOutput] = useState(false)

  return (
    <div>
      <Display messages={messages} setGeneratingOutput={setGeneratingOutput}/>
      <TextBox setMessages={setMessages} messages={messages} generatingOutput={generatingOutput}/>
    </div>
  )
}

export default App
