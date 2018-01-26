import React from 'react'

const SectionOption = props => {
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

export default SectionOption
