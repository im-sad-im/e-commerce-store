export const Empty = ({title}) => {
  return(
    <div className="no-item">
    <h3>{title}</h3>
    <p>There are no items in your {title}.</p>
  </div>
  )
}
