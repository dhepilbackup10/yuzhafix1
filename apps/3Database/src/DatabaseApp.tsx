import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@yuzha/auth'
import DatabaseScreen from './DatabaseScreen'

export default function DatabaseApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <DatabaseScreen />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}