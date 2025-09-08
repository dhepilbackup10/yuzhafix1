import React from 'react'
import { AuthGuard } from '@yuzha/auth'
import { AppLayout, AppHeader, BackToLauncher, Card } from '@yuzha/ui'
import { Coffee, Calculator, Receipt, Wifi } from 'lucide-react'

export default function MengScreen() {
  return (
    <AuthGuard module="meng">
      <AppLayout
        header={
          <AppHeader 
            title="Meng - POS System" 
            showUserInfo={true}
          />
        }
      >
        <div className="max-w-6xl mx-auto">
          <BackToLauncher />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
              title="Point of Sale"
              className="text-center"
            >
              <Coffee size={48} className="mx-auto mb-4 text-amber-600" />
              <p className="text-gray-600">
                POS system ready for transactions
              </p>
            </Card>
            
            <Card 
              title="Business Calculator"
              className="text-center"
            >
              <Calculator size={48} className="mx-auto mb-4 text-blue-600" />
              <p className="text-gray-600">
                Calculate profits and expenses
              </p>
            </Card>
            
            <Card 
              title="Receipt System"
              className="text-center"
            >
              <Receipt size={48} className="mx-auto mb-4 text-green-600" />
              <p className="text-gray-600">
                Print and manage receipts
              </p>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <Wifi size={16} />
              <span className="font-medium">Meng Module - Ready ✅</span>
            </div>
          </div>
        </div>
      </AppLayout>
    </AuthGuard>
  )
}