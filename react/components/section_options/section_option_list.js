import React from 'react'

const SectionOptionList = props => {
  const entries = props.option.map(([name, price], idx) => {
    return <div key={idx}>
      {name}
      {price}
    </div>
  })
  return (
    <div>
      {entries}
    </div>
  )
}

export default SectionOptionList
