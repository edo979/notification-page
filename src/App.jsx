import { useState } from 'react'
import Notification from './Notification'

import './scss/style.scss'

function App() {
  const [state, setState] = useState({ notifications: 0 })

  return (
    <>
      <header className="header | flex">
        <h1>
          Notifications <span className="badge">{state.notifications}</span>
        </h1>
        <button className="btn btn-text">Mark all as read</button>
      </header>

      <main>
        <ul className="notification-list">
          <Notification />
        </ul>
      </main>
    </>
  )
}

export default App
