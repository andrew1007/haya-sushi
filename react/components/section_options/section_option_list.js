import React from 'react'
import SectionOptionEntry from './section_option_entry'

const SectionOptionList = props => {
  const {details, title} = props.option
  console.log(props);
  const midIdx = Math.floor(details.length / 2) + 1
  const left = details.slice(0, midIdx).map(([name, price], idx) => {
    let optionEntryProps = {name, price}
    return <SectionOptionEntry key={idx} {...optionEntryProps}/>
  })
  const right = details.slice(midIdx).map(([name, price], idx) => {
    let optionEntryProps = {name, price}
    return <SectionOptionEntry key={idx + midIdx + 1} {...optionEntryProps}/>
  })
  const containerStyle = {
    display: 'flex',
    justifyContent:'space-around'
  }
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '15px',
    width: '50%'
  }
  const headerStyle = {
    marginBottom: '0px',
    marginLeft: '10px'
  }
  const options = [left, right].map((arr, idx) => {
    return <div key={idx} style={style}>{arr}</div>
  })
  return (
    <div>
      <h3 style={headerStyle}>{title}</h3>
      <div style={containerStyle}>
        {options}
      </div>
    </div>
  )
}

export default SectionOptionList
