import React from 'react'

const Lists = ({items,category}) => {
    
    const listitems=items.map((item=> <li key={item.id}>{item.name}: <b>{item.calories}</b></li>))
  return (
    <div>
<h3>{category}</h3>
      <ol>
        {listitems}
      </ol>
    </div>
  )
}

export default Lists
