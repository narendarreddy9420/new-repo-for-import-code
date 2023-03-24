import Component from 'react'
import BrowserHistoryItems from '../BrowserHistoryItems'
import '.index.css'

class BrowserHistory extends Component {
 const {initialHistoryList}=this.props
  state = {searchIn: '', initialHistoryList: initialHistoryList}

  onChangeValue = event => {
    this.setState({searchIn: event.target.value})
  }

  onClickEle = id => {
    const {initialHistoryList} = this.props
    const filteredList = initialHistoryList.filter(each => each.id !== id)
    this.setState({initialHistoryList: filteredList})
  }

  render() {
    const {searchIn} = this.state
    const {initialHistoryList} = this.state
    const searchResults = initialHistoryList.filter(each =>
      each.toLowerCase().includes(searchIn.toLowerCase()),
    )

    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input onChange={this.onChangeValue} />
          </div>
        </div>

        <ul>
          {searchResults.map(each => (
            <BrowserHistoryItems
              eachDetails={each}
              key={each.id}
              onClickEle={this.onClickEle}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default BrowserHistory
