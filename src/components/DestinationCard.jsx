const DestinationCard = (props) => {
  return (
    <div className="card">
      <img
        src={props.item.imageUrl}
        alt={props.item.title}
        className="card--image"
      />
      <div className="card--info">
        <section className="card--location">
          <p className="card--location-name">{props.item.location}</p>
          <a className="card--location-link" href={props.item.googleMapsUrl}>
            View on Google Maps
          </a>
        </section>
        <h2 className="card--title">{props.item.title}</h2>
        <p className="card--date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card--description">{props.item.description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
