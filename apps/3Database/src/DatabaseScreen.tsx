import React from 'react'
import { AuthGuard } from '@yuzha/auth'
import { AppLayout, AppHeader, BackToLauncher, Card } from '@yuzha/ui'
import { Database, BarChart3, TrendingUp, FileText } from 'lucide-react'

export default function DatabaseScreen() {
  return (
    <AuthGuard module="database">
      <AppLayout
        header={
          <AppHeader 
            title="Database - Analytics Dashboard" 
            showUserInfo={true}
          />
        }
      >
        <div className="max-w-6xl mx-auto">
          <BackToLauncher />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
              title="Sales Analytics"
              className="text-center"
            >
              <BarChart3 size={48} className="mx-auto mb-4 text-blue-600" />
              <p className="text-gray-600">
                View sales trends and performance
              </p>
            </Card>
            
            <Card 
              title="Business Insights"
              className="text-center"
            >
              <TrendingUp size={48} className="mx-auto mb-4 text-green-600" />
              <p className="text-gray-600">
                Track business growth metrics
              </p>
            </Card>
            
            <Card 
              title="Data Export"
              className="text-center"
            >
              <FileText size={48} className="mx-auto mb-4 text-orange-600" />
              <p className="text-gray-600">
                Export data to Google Sheets
              </p>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <Database size={16} />
              <span className="font-medium">Database Module - Ready ✅</span>
            </div>
          </div>
        </div>
      </AppLayout>
    </AuthGuard>
  )
}