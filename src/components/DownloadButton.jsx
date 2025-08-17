import React from 'react'

const DownloadButton = ({ text, onClick }) => {
  return (
    <button className="download-button" onClick={onClick}>
      {text}
    </button>
  )
}

export default DownloadButton
