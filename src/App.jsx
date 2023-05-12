import { useState } from 'react'
import reactLogo from './assets/react.svg'
import onexLogo from './assets/onexLogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={onexLogo} alt="onexLogo"/>
        <div>
          <a>
            <h1>Macro Indicators Dashboard</h1>
          </a>
        </div>
      </div>

      <a>
        <div>
          <h1>Price of Risk</h1>
        </div>
      </a>

      <a>
        <div>
          <h1>Credit Indicators</h1>
        </div>
      </a>

      <a>
        <div>
          <h1>Equity Indicators</h1>
        </div>
      </a>

      <a>
        <div>
          <h1>Risk Indicators</h1>
        </div>
      </a>
    </>
  )
}

export default App
