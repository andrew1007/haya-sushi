import React from 'react'

const SectionOptionEntry = props => {
  const {name, price} = props
  const style = {
    width: '70%',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '17px',
    marginBottom: '4px'
  }
  return (
    <div className='section-options-entry' style={style}>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  )
}

export default SectionOptionEntry
