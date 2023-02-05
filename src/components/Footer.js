import React from 'react'

const Footer = () => {
  const footerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    position: 'fixed',
    bottom: '0',
    left:'0',
    zIndex: '2',
    width: '100%'
  }

  const textStyle = {
    margin: '0',
    fontSize: '16px',
    lineHeight: '20px',
    backgroundColor: '#f7f7f7'
  }
  return (
    <footer className='footer' style={footerStyle}>
      <p className="footerText" style={textStyle}>This is react assignment</p>
    </footer>
  )
}

export default Footer;
