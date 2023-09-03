


const Badges = ({title, list, color}) => {
    
  return (
    <div>
        <h5>{title}</h5>
        {list.map((item, i)=>(
            <p key={i} className={`badge ${color} me-2 mb-2`}>{item.name}</p>
        ))}
    </div>
  )
}

export default Badges;