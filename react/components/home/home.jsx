import React from 'react'

const Home = props => {
  const logo = "https://res.cloudinary.com/andoo/image/upload/v1490320285/hayalogo_zrlsha.png"
  let info = [
    "7086 Auburn Blvd #160",
    "Citrus Heights, CA 95621",
    "(916) 725-1588",
    "Open Everyday",
    "11:30 AM - 10:00 PM"
  ]
  const textStyle = {
    margin: '10px'
  }
  const infoRender = info.map((text, idx) => <div key={idx} style={textStyle}>{text}</div>)
  const infoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    marginTop: '30px',
    height: '80vh'
  }
  return (
    <div className='menu-section-list-container' style={containerStyle}>
      <img className='menu-section-logo' src={logo}/>
      <div className='menu-section-info' style={infoStyle}>
        {infoRender}
      </div>
    </div>
  )
}

export default Home
