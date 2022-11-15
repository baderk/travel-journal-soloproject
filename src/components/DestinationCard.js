
const DestinationCard = (props) => {

  return (
    <div className="card">
      <img src={props.item.imageUrl} alt="" className="card--image" />
      <div>
        <span>{props.item.location}</span>
        <span>{props.item.googleMapsUrl}</span>

        <h1>{props.item.title}</h1>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}

export default DestinationCard;