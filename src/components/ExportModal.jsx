import React, { useState, useEffect } from 'react'
import ModalHeader from './ModalHeader'
import TabContainer from './TabContainer'
import TabContent from './TabContent'

const ExportModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('html')

  // Handle escape key and click outside modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (e) => {
      if (e.target === e.currentTarget) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [onClose])

  const handleTabChange = (tabName) => {
    setActiveTab(tabName)
  }

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <ModalHeader onClose={onClose} />
        <TabContainer activeTab={activeTab} onTabChange={handleTabChange} />
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  )
}

export default ExportModal
