// Write your code here

class destinationItem extends Component {
  render() {
    const {destinationList} = this.props
    console.log(destinationList)
    return (
      <li>
        <img>{imageUrl}</img>
        <h1>{name}</h1>
      </li>
    )
  }
}
export default destinationItem
