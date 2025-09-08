import React from 'react'
import { AuthGuard } from '@yuzha/auth'
import { AppLayout, AppHeader, BackToLauncher, Card } from '@yuzha/ui'
import { Settings, Palette, Lock, Globe } from 'lucide-react'

export default function SettingScreen() {
  return (
    <AuthGuard module="setting">
      <AppLayout
        header={
          <AppHeader 
            title="Setting - Global Configuration" 
            showUserInfo={true}
          />
        }
      >
        <div className="max-w-6xl mx-auto">
          <BackToLauncher />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
              title="UI Preferences"
              className="text-center"
            >
              <Palette size={48} className="mx-auto mb-4 text-purple-600" />
              <p className="text-gray-600">
                Customize theme and appearance
              </p>
            </Card>
            
            <Card 
              title="Password Management"
              className="text-center"
            >
              <Lock size={48} className="mx-auto mb-4 text-red-600" />
              <p className="text-gray-600">
                Change access passwords
              </p>
            </Card>
            
            <Card 
              title="Business Config"
              className="text-center"
            >
              <Globe size={48} className="mx-auto mb-4 text-blue-600" />
              <p className="text-gray-600">
                Configure business settings
              </p>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <Settings size={16} />
              <span className="font-medium">Setting Module - Ready ✅</span>
            </div>
          </div>
        </div>
      </AppLayout>
    </AuthGuard>
  )
}