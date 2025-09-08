import React, { ReactNode } from 'react'
import { ArrowLeft, Home, Settings, User, LogOut, Coffee, Users, Database, Plus } from 'lucide-react'
import clsx from 'clsx'

// Utility function for className merging
export const cn = (...classes: (string | undefined | false)[]) => {
  return clsx(classes.filter(Boolean))
}

// Base Button Component
interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false,
  type = 'button'
}) => {
  const baseStyle = 'font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white shadow-md hover:shadow-lg',
    danger: 'bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg',
    success: 'bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyle, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  )
}

// Layout Components
export const AppLayout: React.FC<{ 
  children: ReactNode
  header?: ReactNode
  sidebar?: ReactNode
  className?: string
}> = ({ children, header, sidebar, className = '' }) => {
  return (
    <div className={cn('min-h-screen bg-gray-50', className)}>
      {header && (
        <header className="bg-white shadow-sm border-b border-gray-200">
          {header}
        </header>
      )}
      <div className="flex">
        {sidebar && (
          <aside className="w-64 bg-white shadow-sm min-h-screen">
            {sidebar}
          </aside>
        )}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

// Header Component
export const AppHeader: React.FC<{
  title: string
  actions?: ReactNode
  showUserInfo?: boolean
}> = ({ title, actions, showUserInfo = true }) => {
  return (
    <div className="px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      </div>
      <div className="flex items-center space-x-4">
        {actions}
        {showUserInfo && (
          <div className="flex items-center space-x-2">
            <User size={20} className="text-gray-600" />
            <span className="text-sm text-gray-600">Admin</span>
          </div>
        )}
      </div>
    </div>
  )
}

// Navigation Components
export const BackToLauncher: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <Button 
      onClick={() => window.location.href = '/'}
      variant="secondary"
      size="sm"
      className={cn('mb-4', className)}
    >
      <ArrowLeft size={16} />
      Back to Launcher
    </Button>
  )
}

// Module Navigation Grid
export const ModuleGrid: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {children}
    </div>
  )
}

// Module Button Component
interface ModuleButtonProps {
  name: string
  path: string
  icon?: ReactNode
  color?: string
  description?: string
  disabled?: boolean
}

export const ModuleButton: React.FC<ModuleButtonProps> = ({ 
  name, 
  path, 
  icon, 
  color = 'bg-blue-500',
  description,
  disabled = false
}) => {
  const handleClick = () => {
    if (!disabled) {
      window.location.href = path
    }
  }
  
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        'group relative overflow-hidden rounded-xl p-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed',
        color,
        'min-h-[160px] flex flex-col items-center justify-center text-center'
      )}
    >
      <div className="mb-3">
        {icon || <Coffee size={32} />}
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      {description && (
        <p className="text-sm opacity-90">{description}</p>
      )}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </button>
  )
}

// Card Components
export const Card: React.FC<{
  children: ReactNode
  className?: string
  title?: string
  actions?: ReactNode
}> = ({ children, className = '', title, actions }) => {
  return (
    <div className={cn('bg-white rounded-lg shadow-sm border border-gray-200', className)}>
      {(title || actions) && (
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
          {actions && <div className="flex items-center space-x-2">{actions}</div>}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  )
}

// Input Components
export const Input: React.FC<{
  label?: string
  type?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  className?: string
  error?: string
}> = ({ label, type = 'text', value, onChange, placeholder, required, className = '', error }) => {
  return (
    <div className={cn('space-y-1', className)}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={cn(
          'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500',
          error ? 'border-red-500' : ''
        )}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

// Loading Component
export const Loading: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }
  
  return (
    <div className="flex items-center justify-center">
      <div className={cn('animate-spin rounded-full border-2 border-blue-500 border-t-transparent', sizes[size])} />
    </div>
  )
}

// Empty State Component
export const EmptyState: React.FC<{
  icon?: ReactNode
  title: string
  description?: string
  action?: ReactNode
}> = ({ icon, title, description, action }) => {
  return (
    <div className="text-center py-12">
      <div className="mb-4 flex justify-center">
        {icon || <Database size={48} className="text-gray-400" />}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      {description && (
        <p className="text-gray-600 mb-6 max-w-sm mx-auto">{description}</p>
      )}
      {action}
    </div>
  )
}

// Module Icons
export const ModuleIcons = {
  Launcher: Home,
  Meng: Coffee,
  Rara: Users,
  Database: Database,
  Setting: Settings,
  Extra: Plus
}

// Export all components
export {
  ArrowLeft,
  Home,
  Settings,
  User,
  LogOut,
  Coffee,
  Users,
  Database,
  Plus
}

// Default export with all components
export default {
  Button,
  AppLayout,
  AppHeader,
  BackToLauncher,
  ModuleGrid,
  ModuleButton,
  Card,
  Input,
  Loading,
  EmptyState,
  ModuleIcons,
  cn
}