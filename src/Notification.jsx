function Notification({ data: { user, text, time, payload } }) {
  const htmlElement = () => {
    switch (payload.type) {
      case 'link':
        return <a href={payload.url}>{payload.text}</a>
      case 'img':
        return <img src={payload.url} />

      default:
        return undefined
    }
  }
  return (
    <li className="card | flex">
      <div className="card_body | flex">
        <img src={user.img} alt="user avatar" className="card_img" />

        <div className="card_content">
          <div className="card_text">
            <span className="text-dark text-bold">{user.name} </span>

            <span>{text} </span>

            {payload.type === 'link' && (
              <a href={payload.url}>{payload.text}</a>
            )}
          </div>
          <div className="card_info | text-light">{time}</div>
          {payload.type === 'msg' && <p>{payload.msg}</p>}
        </div>
      </div>

      {payload.type === 'img' && (
        <img src={payload.url} className="card_content-img" />
      )}
    </li>
  )
}

export default Notification
