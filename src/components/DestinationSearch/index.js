import {Component} from 'react'

import './index.css'
import destinationItem from '../DestinationItem'

class destinationSearch extends Component {
  state = {searchInput: ''}

  onChange = each => {
    this.setState({
      searchInput: each.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="container">
        <h1 className="heading">Destination</h1>
        <input type="search" className="user-input" onChange={this.onChange}>
          {searchInput}
        </input>
        <ul>
          <destinationItem />
        </ul>
      </div>
    )
  }
}
export default destinationSearch
