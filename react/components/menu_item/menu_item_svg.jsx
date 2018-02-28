import React from 'react'

const MenuItemSVG = props => {
  return (
    <svg className='menu-item-svg' xmlns="http://www.w3.org/2000/svg"
      fill="#EF5350" viewBox="0 0 24 24">
      <path className='menu-item-svg' d={props.d}/>
    </svg>
  )
}

export default MenuItemSVG
