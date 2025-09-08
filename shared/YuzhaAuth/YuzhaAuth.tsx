import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Auth store with Zustand
interface AuthStore {
  isAuthenticated: boolean
  userRole: 'admin' | 'cashier' | 'staff' | null
  lastLogin: string | null
  setAuth: (role: 'admin' | 'cashier' | 'staff') => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userRole: null,
      lastLogin: null,
      setAuth: (role) => set({
        isAuthenticated: true,
        userRole: role,
        lastLogin: new Date().toISOString()
      }),
      clearAuth: () => set({
        isAuthenticated: false,
        userRole: null,
        lastLogin: null
      })
    }),
    {
      name: 'yuzha-auth'
    }
  )
)

// Password configuration
const PASSWORDS = {
  admin: 'admin123',    // Full access to all modules
  cashier: 'cashier123', // Access to Meng + Setting
  staff: 'staff123'     // Access to Rara + Setting
} as const

// Module access permissions
const MODULE_PERMISSIONS = {
  admin: ['launcher', 'meng', 'rara', 'database', 'setting', 'extra'],
  cashier: ['launcher', 'meng', 'setting'],
  staff: ['launcher', 'rara', 'setting']
} as const

// Auth hook
export const useAuth = () => {
  const { isAuthenticated, userRole, setAuth, clearAuth } = useAuthStore()
  
  const validatePassword = (password: string): 'admin' | 'cashier' | 'staff' | false => {
    for (const [role, pass] of Object.entries(PASSWORDS)) {
      if (password === pass) {
        return role as 'admin' | 'cashier' | 'staff'
      }
    }
    return false
  }
  
  const login = (password: string): boolean => {
    const role = validatePassword(password)
    if (role) {
      setAuth(role)
      return true
    }
    return false
  }
  
  const logout = () => {
    clearAuth()
  }
  
  const hasModuleAccess = (module: string): boolean => {
    if (!userRole) return false
    return MODULE_PERMISSIONS[userRole].includes(module.toLowerCase())
  }
  
  return {
    isAuthenticated,
    userRole,
    login,
    logout,
    hasModuleAccess,
    validatePassword
  }
}

// Auth Context
interface AuthContextType {
  isAuthenticated: boolean
  userRole: 'admin' | 'cashier' | 'staff' | null
  login: (password: string) => boolean
  logout: () => void
  hasModuleAccess: (module: string) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}

// Auth Provider Component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const auth = useAuth()
  
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

// Auth Guard Component
interface AuthGuardProps {
  children: ReactNode
  module?: string
  fallback?: ReactNode
  requireAuth?: boolean
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ 
  children, 
  module, 
  fallback, 
  requireAuth = true 
}) => {
  const { isAuthenticated, hasModuleAccess } = useAuth()
  
  // No auth required (like Launcher)
  if (!requireAuth) {
    return <>{children}</>
  }
  
  // Check authentication
  if (!isAuthenticated) {
    return <>{fallback || <LoginPrompt />}</>
  }
  
  // Check module access
  if (module && !hasModuleAccess(module)) {
    return <>{fallback || <AccessDenied module={module} />}</>
  }
  
  return <>{children}</>
}

// Login Prompt Component
export const LoginPrompt: React.FC<{ onLogin?: (success: boolean) => void }> = ({ onLogin }) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const success = login(password)
    if (success) {
      setError('')
      onLogin?.(true)
    } else {
      setError('Invalid password')
      setPassword('')
      onLogin?.(false)
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Enter Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Access Yuzha Module
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Access Denied Component
export const AccessDenied: React.FC<{ module: string }> = ({ module }) => {
  const { userRole, logout } = useAuth()
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-4">
          Your role ({userRole}) doesn't have access to {module} module
        </p>
        <div className="space-x-4">
          <button
            onClick={() => window.location.href = '/'}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Back to Launcher
          </button>
          <button
            onClick={logout}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            Switch User
          </button>
        </div>
      </div>
    </div>
  )
}

// User Info Component
export const UserInfo: React.FC = () => {
  const { userRole, logout } = useAuth()
  
  if (!userRole) return null
  
  return (
    <div className="flex items-center space-x-4 text-sm">
      <span className="text-gray-600">
        Logged in as: <span className="font-semibold text-blue-600">{userRole}</span>
      </span>
      <button
        onClick={logout}
        className="text-red-600 hover:text-red-800 font-medium"
      >
        Logout
      </button>
    </div>
  )
}

export default { useAuth, AuthProvider, AuthGuard, LoginPrompt, AccessDenied, UserInfo }