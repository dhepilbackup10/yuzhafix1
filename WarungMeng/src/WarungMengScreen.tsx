import React from 'react'
import { AuthGuard } from '@yuzha/auth'
import { AppLayout, AppHeader, BackToLauncher, Card } from '@yuzha/ui'
import { Globe, Coffee, MapPin, Phone } from 'lucide-react'

export default function WarungMengScreen() {
  return (
    <AuthGuard requireAuth={false}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">WarungMeng</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Welcome to our cozy cafe where tradition meets modern comfort. 
              Experience authentic Indonesian coffee and delicious local cuisine.
            </p>
            <BackToLauncher className="bg-white text-amber-600 hover:bg-gray-100" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card 
                title="Premium Coffee"
                className="text-center"
              >
                <Coffee size={48} className="mx-auto mb-4 text-amber-600" />
                <p className="text-gray-600">
                  Freshly brewed traditional Indonesian coffee
                </p>
              </Card>
              
              <Card 
                title="Cozy Location"
                className="text-center"
              >
                <MapPin size={48} className="mx-auto mb-4 text-green-600" />
                <p className="text-gray-600">
                  Prime location in the heart of the city
                </p>
              </Card>
              
              <Card 
                title="Contact Us"
                className="text-center"
              >
                <Phone size={48} className="mx-auto mb-4 text-blue-600" />
                <p className="text-gray-600">
                  Always ready to serve you
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <Globe size={16} />
              <span className="font-medium">WarungMeng Website - Ready ✅</span>
            </div>
            <p>&copy; 2024 WarungMeng. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </AuthGuard>
  )
}