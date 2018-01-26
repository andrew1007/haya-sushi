import React from 'react'
import SectionOptionEntry from './section_option_entry'

const SectionOptionList = props => {
  const entries = props.option.map(([name, price], idx) => {
    let optionEntryProps = {name, price}
    return <SectionOptionEntry key={idx} {...optionEntryProps}/>
  })
  return (
    <div>
      {entries}
    </div>
  )
}

export default SectionOptionList
