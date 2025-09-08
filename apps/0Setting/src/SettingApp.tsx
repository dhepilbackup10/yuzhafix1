import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@yuzha/auth'
import SettingScreen from './SettingScreen'

export default function SettingApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <SettingScreen />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}