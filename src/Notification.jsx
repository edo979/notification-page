function Notification({ data: { user, text, time, payload, isRead } }) {
  return (
    <li className={'card | flex ' + (isRead ? '' : 'bg-light')}>
      <div className="card_body | flex">
        <img src={user.img} alt="user avatar" className="card_img" />

        <div className="card_content">
          <div className="card_text">
            <span className="text-dark text-bold">{user.name}</span>

            <span> {text}</span>

            {payload.type === 'link' && (
              <a
                className={payload.important && 'link-variant-1'}
                href={payload.url}
              >
                {' '}
                {payload.text}
              </a>
            )}

            {!isRead && <span className="card_unread-dot"></span>}
          </div>

          <div className="card_info | text-light">{time}</div>

          {/* Private message */}
          {payload.type === 'msg' && <p className="box">{payload.msg}</p>}
        </div>
      </div>

      {payload.type === 'img' && (
        <img src={payload.url} className="card_content-img" />
      )}
    </li>
  )
}

export default Notification
