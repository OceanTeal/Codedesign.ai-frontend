import React from 'react'

const ExportTypeCard = ({ type, label, showZipLabel }) => {
  const getIcon = () => {
    if (type === 'html') {
      return (
        <div className="export-icon">
          <img src="/image.png" alt="HTML CSS" style={{ width: '20px', height: '20px' }} />
        </div>
      )
    } else if (type === 'nextjs') {
      return (
        <div className="export-icon">
          <img src="/icons8-react-native-50.png" alt="React Native" style={{ width: '20px', height: '20px' }} />
        </div>
      )
    }
    return null
  }

  return (
    <div className="export-type-card">
      <div className="export-type-info">
        {getIcon()}
        <span>{label}</span>
      </div>
      <div className="zip-label">Zipped</div>
    </div>
  )
}

export default ExportTypeCard
