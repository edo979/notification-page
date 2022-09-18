import { useState } from 'react'
import Notification from './Notification'

import './scss/style.scss'

const notifications = [
  {
    read: false,
    user: 'Mark Webber',
    text: 'react to your recent post',
    payload: { type: 'link', text: 'My first tournament today!', url: '#' },
    time: '1m ago',
  },
  {
    read: false,
    user: 'Angela Gray',
    text: 'followed you',
    payload: { type: 'message' },
    time: '5m ago',
  },
  {
    read: false,
    user: 'Jacob Thompson',
    text: 'has joined your group',
    payload: { type: 'link', text: 'Chess Club', url: '#' },
    time: '1 day ago',
  },
  {
    read: false,
    user: 'Rizky Hasanuddin',
    text: 'sent you a private message',
    payload: {
      type: 'private-msg',
      text: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.`,
    },
    time: '5 days',
  },
  {
    read: false,
    user: 'Kimberly Smith',
    text: 'commented on your picture',
    payload: { type: 'img', url: '#' },
    time: '1 week ago',
  },
  {
    read: false,
    user: 'Nathan Peterson',
    text: 'react to your recent post',
    payload: {
      type: 'link',
      text: '5 end-game strategies to increase your win rate',
      url: '#',
    },
    time: '2 weeks ago',
  },
  {
    read: false,
    user: 'Anna Kim',
    text: 'left the group',
    payload: { type: 'link', text: 'Chess Club', url: '#' },
    time: '2 weeks ago',
  },
]

function App() {
  const [state, setState] = useState({ notifications: 0 })

  return (
    <>
      <header className="header | flex">
        <h1>
          Notifications <span className="badge">3</span>
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
