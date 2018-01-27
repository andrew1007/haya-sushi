import React from 'react'

const ItemDescription = props => {
  const {description} = props
  const style = {
    marginLeft: '10px'
  }
  return <div className='menu-item-description' style={style}>
    {description}
  </div>
}

export default ItemDescription
