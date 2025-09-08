import React from 'react'
import { AuthGuard } from '@yuzha/auth'
import { AppLayout, AppHeader, BackToLauncher, Card } from '@yuzha/ui'
import { Plus, Gamepad2, Music, Camera } from 'lucide-react'

export default function ExtraScreen() {
  return (
    <AuthGuard module="extra">
      <AppLayout
        header={
          <AppHeader 
            title="Extra - Personal Applications" 
            showUserInfo={true}
          />
        }
      >
        <div className="max-w-6xl mx-auto">
          <BackToLauncher />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
              title="Games"
              className="text-center"
            >
              <Gamepad2 size={48} className="mx-auto mb-4 text-indigo-600" />
              <p className="text-gray-600">
                Personal games and entertainment
              </p>
            </Card>
            
            <Card 
              title="Media Player"
              className="text-center"
            >
              <Music size={48} className="mx-auto mb-4 text-pink-600" />
              <p className="text-gray-600">
                Music and media management
              </p>
            </Card>
            
            <Card 
              title="Photo Gallery"
              className="text-center"
            >
              <Camera size={48} className="mx-auto mb-4 text-teal-600" />
              <p className="text-gray-600">
                Personal photo collection
              </p>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <Plus size={16} />
              <span className="font-medium">Extra Module - Ready ✅</span>
            </div>
          </div>
        </div>
      </AppLayout>
    </AuthGuard>
  )
}