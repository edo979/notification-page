function Notification({ data: { user, text } }) {
  return (
    <li>
      {user} {text}
    </li>
  )
}

export default Notification
