import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@yuzha/auth'
import RaraScreen from './RaraScreen'

export default function RaraApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <RaraScreen />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}