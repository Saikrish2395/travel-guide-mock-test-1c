import './index.css'

const TravelGuideDetails = props => {
  const {itemDetails} = props
  const {name, imageUrl, description} = itemDetails

  return (
    <div className="container">
      <li className="package-item">
        <img src={imageUrl} alt={name} className="logo" />
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </li>
    </div>
  )
}

export default TravelGuideDetails
