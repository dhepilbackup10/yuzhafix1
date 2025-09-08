import React from 'react'
import { ModuleGrid, ModuleButton, ModuleIcons, Button } from '@yuzha/ui'
import { Coffee, Users, Database, Settings, Plus, Globe } from 'lucide-react'
import { MODULE_CONFIG, navigateToModule, getModuleUrl, isDevelopment } from './LauncherUtils-Nav'

export default function LauncherScreen() {
  // Custom click handler for module navigation
  const handleModuleClick = (moduleKey: string) => {
    navigateToModule(moduleKey)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            Yuzha Ecosystem
          </h1>
          <p className="text-xl text-blue-200">
            Personal Cafe Business Management System
          </p>
          {isDevelopment() && (
            <p className="text-sm text-amber-300 mt-2">
              🚀 Development Mode - Modules will open in new tabs
            </p>
          )}
        </div>

        <ModuleGrid>
          <ModuleButton
            name={MODULE_CONFIG.meng.name}
            path={getModuleUrl('meng')}
            icon={<Coffee size={32} />}
            color="bg-amber-600 hover:bg-amber-700"
            description={MODULE_CONFIG.meng.description}
            onClick={() => handleModuleClick('meng')}
          />
          
          <ModuleButton
            name={MODULE_CONFIG.rara.name}
            path={getModuleUrl('rara')}
            icon={<Users size={32} />}
            color="bg-green-600 hover:bg-green-700"
            description={MODULE_CONFIG.rara.description}
            onClick={() => handleModuleClick('rara')}
          />
          
          <ModuleButton
            name={MODULE_CONFIG.database.name}
            path={getModuleUrl('database')}
            icon={<Database size={32} />}
            color="bg-blue-600 hover:bg-blue-700"
            description={MODULE_CONFIG.database.description}
            onClick={() => handleModuleClick('database')}
          />
          
          <ModuleButton
            name={MODULE_CONFIG.setting.name}
            path={getModuleUrl('setting')}
            icon={<Settings size={32} />}
            color="bg-gray-600 hover:bg-gray-700"
            description={MODULE_CONFIG.setting.description}
            onClick={() => handleModuleClick('setting')}
          />
          
          <ModuleButton
            name={MODULE_CONFIG.extra.name}
            path={getModuleUrl('extra')}
            icon={<Plus size={32} />}
            color="bg-purple-600 hover:bg-purple-700"
            description={MODULE_CONFIG.extra.description}
            onClick={() => handleModuleClick('extra')}
          />
          
          <ModuleButton
            name={MODULE_CONFIG.warungmeng.name}
            path={getModuleUrl('warungmeng')}
            icon={<Globe size={32} />}
            color="bg-red-600 hover:bg-red-700"
            description={MODULE_CONFIG.warungmeng.description}
            onClick={() => handleModuleClick('warungmeng')}
          />
        </ModuleGrid>

        <div className="mt-12">
          <p className="text-blue-200 text-sm">
            Launcher Module - Ready ✅
          </p>
          {isDevelopment() && (
            <div className="mt-4 text-xs text-blue-300">
              <p>Development Ports:</p>
              <div className="grid grid-cols-2 gap-2 mt-2 max-w-md mx-auto">
                {Object.entries(MODULE_CONFIG).map(([key, config]) => (
                  <div key={key} className="text-left">
                    <span className="font-mono">{config.name}: {config.devPort}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}