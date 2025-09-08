#!/usr/bin/env node
import { execSync } from 'child_process'
import path from 'path'
import fs from 'fs'

const APPS = [
  { name: "Launcher",    route: "/",            isRoot: true,  path: "Launcher" },
  { name: "1Meng",       route: "/meng",        isRoot: false, path: "apps/1Meng" },
  { name: "5Rara",       route: "/rara",        isRoot: false, path: "apps/5Rara" },
  { name: "3Database",   route: "/database",    isRoot: false, path: "apps/3Database" },
  { name: "0Setting",    route: "/setting",     isRoot: false, path: "apps/0Setting" },
  { name: "4Extra",      route: "/extra",       isRoot: false, path: "apps/4Extra" },
  { name: "WarungMeng",  route: "/warungmeng",  isRoot: false, path: "WarungMeng" },
]

console.log('🚀 Starting Yuzha multi-module build...')

// Clean dist directory sekali di awal
if (fs.existsSync('./dist')) {
  fs.rmSync('./dist', { recursive: true, force: true })
}
fs.mkdirSync('./dist', { recursive: true })

// Build each module
for (const app of APPS) {
  console.log(`📦 Building ${app.name}...`)
  
  try {
    const command = `npm run build --workspace=${app.path}`
    execSync(command, { 
      stdio: 'inherit',
      cwd: process.cwd()
    })
    console.log(`✅ ${app.name} built successfully`)
  } catch (error) {
    console.error(`❌ Failed to build ${app.name}:`, error.message)
    process.exit(1)
  }
}

// Copy netlify.toml to dist for deployment
if (fs.existsSync('./netlify.toml')) {
  fs.copyFileSync('./netlify.toml', './dist/netlify.toml')
  console.log('📋 Copied netlify.toml to dist/')
}

console.log('🎉 All modules built successfully!')
console.log('\n📂 Built modules:')
APPS.forEach(app => {
  const location = app.isRoot ? './dist/' : `./dist${app.route}/`
  console.log(`   - ${app.name}: ${location}`)
})

console.log('\n🚀 Ready for deployment!')