import React from 'react'

const TabContainer = ({ activeTab, onTabChange }) => {
  return (
    <div className="tabs-container">
      <div className="tabs">
        <button 
          className={`tab-button ${activeTab === 'html' ? 'active' : ''}`}
          onClick={() => onTabChange('html')}
        >
          HTML & CSS
        </button>
        <button 
          className={`tab-button ${activeTab === 'nextjs' ? 'active' : ''}`}
          onClick={() => onTabChange('nextjs')}
        >
          Next JS
        </button>
      </div>
    </div>
  )
}

export default TabContainer
