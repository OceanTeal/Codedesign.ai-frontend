import React from 'react'

const ModalHeader = ({ onClose }) => {
  return (
    <div className="modal-header">
      <div className="modal-title-section">
        <h2>Code Export</h2>
        <p>Manage how you download your website's code.</p>
      </div>
      <button className="close-button" onClick={onClose}>
        <svg className="close-icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5 7.5L7.5 14.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 7.5L14.5 14.5" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

export default ModalHeader
