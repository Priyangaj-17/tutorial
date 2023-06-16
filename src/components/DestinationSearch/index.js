import {Component} from 'react'

import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChange = each => {
    this.setState({
      searchInput: each.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchInputsItems = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="content-container">
          <h1 className="heading">Destination Search</h1>
          <div>
            <input
              type="search"
              className="user-input"
              onChange={this.onChange}
            />
            <img
              className="searchIcon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
              alt="search icon"
            />
          </div>
          <div className="searchInputContainer">
            <ul className="ItemContainer">
              {searchInputsItems.map(eachDestination => (
                <DestinationItem
                  key={eachDestination.id}
                  destinationDetails={eachDestination}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
// Write your code here
