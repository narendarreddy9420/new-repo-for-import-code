const BrowserHistoryItems = props => {
  const {eachDetails, onClickEle} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachDetails
  const onClickEl = () => {
    onClickEle(id)
  }

  return (
    <li>
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button type="button" onClick={onClickEl}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt=""
        />
      </button>
    </li>
  )
}

export default BrowserHistoryItems
