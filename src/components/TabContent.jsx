import React, { useState } from 'react'
import ExportTypeCard from './ExportTypeCard'
import OptionCheckbox from './OptionCheckbox'
import DownloadButton from './DownloadButton'

const TabContent = ({ activeTab }) => {
  const [htmlOptions, setHtmlOptions] = useState({
    includeAssets: true,
    includeCustomCode: true
  })

  const [nextjsOptions, setNextjsOptions] = useState({
    useAppDirectory: true,
    includeAssets: true,
    includeCustomCode: true
  })

  const handleHtmlOptionChange = (option) => {
    setHtmlOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }))
  }

  const handleNextjsOptionChange = (option) => {
    setNextjsOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }))
  }

  const handleDownload = (type) => {
    const options = type === 'html' ? htmlOptions : nextjsOptions
    console.log(`Downloading ${type} project with options:`, options)
    // Here you would implement the actual download logic
    alert(`${type.toUpperCase()} project download started!`)
  }

  if (activeTab === 'html') {
    return (
      <div className="tab-panel active">
        <div className="tab-content">
          <ExportTypeCard 
            type="html" 
            label="Export as HTML & CSS" 
          />
          
          <div className="options">
            <OptionCheckbox
              id="includeAssetsHtml"
              label="Include assets (images, styles, fonts, etc.)"
              checked={htmlOptions.includeAssets}
              onChange={() => handleHtmlOptionChange('includeAssets')}
            />
            <OptionCheckbox
              id="includeCustomCodeHtml"
              label="Include custom code"
              checked={htmlOptions.includeCustomCode}
              onChange={() => handleHtmlOptionChange('includeCustomCode')}
            />
          </div>
        </div>

        <DownloadButton 
          text="Download HTML CSS Project"
          onClick={() => handleDownload('html')}
        />
      </div>
    )
  }

  if (activeTab === 'nextjs') {
    return (
      <div className="tab-panel active">
        <div className="tab-content">
          <ExportTypeCard 
            type="nextjs" 
            label="Export as Next JS Project"
          />
          
          <div className="options">
            <OptionCheckbox
              id="useAppDirectory"
              label="Use 'app' directory (NextJS v13+)"
              checked={nextjsOptions.useAppDirectory}
              onChange={() => handleNextjsOptionChange('useAppDirectory')}
            />
            <OptionCheckbox
              id="includeAssetsNextjs"
              label="Include assets locally (images, styles, fonts, etc.)"
              checked={nextjsOptions.includeAssets}
              onChange={() => handleNextjsOptionChange('includeAssets')}
            />
            <OptionCheckbox
              id="includeCustomCodeNextjs"
              label="Include custom code"
              checked={nextjsOptions.includeCustomCode}
              onChange={() => handleNextjsOptionChange('includeCustomCode')}
            />
          </div>
        </div>

        <DownloadButton 
          text="Download Next JS Project"
          onClick={() => handleDownload('nextjs')}
        />
      </div>
    )
  }

  return null
}

export default TabContent
