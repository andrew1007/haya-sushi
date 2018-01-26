import React from 'react'

const SectionOptionEntry = props => {
  const {name, price} = props
  const style = {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-between'
  }
  return (
    <div style={style}>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  )
}

export default SectionOptionEntry
