import React from 'react'
import { AuthGuard } from '@yuzha/auth'
import { AppLayout, AppHeader, BackToLauncher, Card } from '@yuzha/ui'
import { Users, Clock, Calendar, CheckCircle } from 'lucide-react'

export default function RaraScreen() {
  return (
    <AuthGuard module="rara">
      <AppLayout
        header={
          <AppHeader 
            title="Rara - Staff Attendance" 
            showUserInfo={true}
          />
        }
      >
        <div className="max-w-6xl mx-auto">
          <BackToLauncher />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
              title="Clock In/Out"
              className="text-center"
            >
              <Clock size={48} className="mx-auto mb-4 text-green-600" />
              <p className="text-gray-600">
                Staff clock in and out system
              </p>
            </Card>
            
            <Card 
              title="Time Tracking"
              className="text-center"
            >
              <Calendar size={48} className="mx-auto mb-4 text-blue-600" />
              <p className="text-gray-600">
                Track working hours and shifts
              </p>
            </Card>
            
            <Card 
              title="Attendance Reports"
              className="text-center"
            >
              <Users size={48} className="mx-auto mb-4 text-purple-600" />
              <p className="text-gray-600">
                Generate attendance reports
              </p>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <CheckCircle size={16} />
              <span className="font-medium">Rara Module - Ready ✅</span>
            </div>
          </div>
        </div>
      </AppLayout>
    </AuthGuard>
  )
}