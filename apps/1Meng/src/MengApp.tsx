import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@yuzha/auth'
import MengScreen from './MengScreen'

export default function MengApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <MengScreen />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}