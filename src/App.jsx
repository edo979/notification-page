import { useState } from 'react'
import Notification from './Notification'

import './scss/style.scss'

const notifications = [
  {
    id: 1,
    isRead: false,
    user: {
      name: 'Mark Webber',
      img: '/public/assets/images/avatar-mark-webber.webp',
    },
    text: 'react to your recent post',
    payload: { type: 'link', text: 'My first tournament today!', url: '#' },
    time: '1m ago',
  },
  {
    id: 2,
    isRead: false,
    user: {
      name: 'Angela Gray',
      img: '/public/assets/images/avatar-angela-gray.webp',
    },
    text: 'followed you',
    payload: { type: 'message' },
    time: '5m ago',
  },
  {
    id: 3,
    isRead: false,
    user: {
      name: 'Jacob Thompson',
      img: '/public/assets/images/avatar-jacob-thompson.webp',
    },
    text: 'has joined your group',
    payload: { type: 'link', text: 'Chess Club', url: '#' },
    time: '1 day ago',
  },
  {
    id: 4,
    isRead: true,
    user: {
      name: 'Rizky Hasanuddin',
      img: '/public/assets/images/avatar-rizky-hasanuddin.webp',
    },
    text: 'sent you a private message',
    payload: {
      type: 'msg',
      msg: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.`,
    },
    time: '5 days ago',
  },
  {
    id: 5,
    isRead: true,
    user: {
      name: 'Kimberly Smith',
      img: '/public/assets/images/avatar-kimberly-smith.webp',
    },
    text: 'commented on your picture',
    payload: { type: 'img', url: '/public/assets/images/image-chess.webp' },
    time: '1 week ago',
  },
  {
    id: 6,
    isRead: true,
    user: {
      name: 'Nathan Peterson',
      img: '/public/assets/images/avatar-nathan-peterson.webp',
    },
    text: 'react to your recent post',
    payload: {
      type: 'link',
      text: '5 end-game strategies to increase your win rate',
      url: '#',
    },
    time: '2 weeks ago',
  },
  {
    id: 7,
    isRead: true,
    user: {
      name: 'Anna Kim',
      img: '/public/assets/images/avatar-anna-kim.webp',
    },
    text: 'left the group',
    payload: { type: 'link', text: 'Chess Club', url: '#' },
    time: '2 weeks ago',
  },
]

function App() {
  const [state, setState] = useState(notifications)

  function handleReadAll() {
    setState((prev) =>
      prev.map((notificaton) => {
        if (!notificaton.isRead) notificaton.isRead = true
        return notificaton
      })
    )
  }

  return (
    <>
      <header className="header | flex">
        <h1>Notifications</h1>
        <span className="badge badge-primary">
          {state.filter((notificaton) => !notificaton.isRead).length}
        </span>
        <button className="btn btn-text" onClick={handleReadAll}>
          Mark all as read
        </button>
      </header>

      <main>
        <ul className="notification-list">
          {state.map((n) => (
            <Notification key={n.id} data={n} />
          ))}
        </ul>
      </main>
    </>
  )
}

export default App
