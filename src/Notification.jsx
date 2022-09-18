function Notification({ data: { user, text, time } }) {
  return (
    <li className="card | flex">
      <img src={user.img} alt="user avatar" className="card_img" />
      <div className="card_body | flex">
        <div className="card_text">
          <span>{user.name}</span>
          <span>{text}</span>
        </div>
        <div className="card_info">{time}</div>
      </div>
    </li>
  )
}

export default Notification
