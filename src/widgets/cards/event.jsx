export function EventCard ({ number, name }) {
  return (
    <div>
      <span className="name">
        {name}
      </span>
      <span className="number">
        {number}
      </span>
    </div>
  )
}

export default EventCard;
