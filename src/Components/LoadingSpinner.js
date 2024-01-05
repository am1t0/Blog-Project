import React from 'react'

export default function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center">
    <div className="spinner-border" style={{height:'50px', width:'50px',marginTop:'200px'}} role="status">
    <span className="sr-only">Loading...</span>
  </div>
  </div>
  )
}
