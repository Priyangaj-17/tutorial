import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="destinationItem">
      <img src={imgUrl} alt={name} className="destinationImage" />
      <p className="ImageName">{name}</p>
    </li>
  )
}

export default DestinationItem

// Write your code here
