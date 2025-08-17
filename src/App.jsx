import React, { useState } from 'react'
import ExportButton from './components/ExportButton'
import ExportModal from './components/ExportModal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="app">
      <div className="page-container">
        <ExportButton onClick={openModal} />
      </div>
      {isModalOpen && (
        <ExportModal onClose={closeModal} />
      )}
    </div>
  )
}

export default App
