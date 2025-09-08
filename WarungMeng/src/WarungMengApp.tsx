import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@yuzha/auth'
import WarungMengScreen from './WarungMengScreen'

export default function WarungMengApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
          <WarungMengScreen />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}