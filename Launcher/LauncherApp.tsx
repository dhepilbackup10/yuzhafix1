import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@yuzha/auth'
import LauncherScreen from './LauncherScreen'

export default function LauncherApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <LauncherScreen />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}