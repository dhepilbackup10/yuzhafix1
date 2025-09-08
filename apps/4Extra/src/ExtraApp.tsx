import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@yuzha/auth'
import ExtraScreen from './ExtraScreen'

export default function ExtraApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <ExtraScreen />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}