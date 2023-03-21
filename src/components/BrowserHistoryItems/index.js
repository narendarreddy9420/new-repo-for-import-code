import './index.css'
const BrowserHistoryItems = props => {
  const {eachDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachDetails
  const onClickEl = () => {
    onClickEle(id)
  }

  return (
    <li>
      <p>{timeAccessed}</p>
      <img src={logoUrl} />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button onClick={onClickEl}>
        <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" />
      </button>
    </li>
  )
}

export default BrowserHistoryItems
