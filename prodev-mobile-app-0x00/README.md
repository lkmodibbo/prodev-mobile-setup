# Mobile App 0x00 - First Expo Router App

## Objective
Set up the first mobile application using the Expo Router template and understand the file structure.

## Steps Followed
1. Navigated to parent project directory:
   ```bash
   cd prodev-mobile-setup
   ```

2. Created a new Expo Router app:
   ```bash
   npx create-expo-app@latest prodev-mobile-app-0x00 --template tabs
   ```

3. Explored the project structure and understood the file organization.

## Project Structure
- `app/` - Main application directory with routes
- `app-example/` - Example code and components for reference
- `scripts/` - Utility scripts including reset-project

## Reset Project Script
The project includes a `reset-project` script that helps you start fresh. You can run it using:
```bash
npm run reset-project
```

This script will:
- Move existing app, components, hooks, constants, and scripts directories to `app-example`
- Create a fresh `app` directory with a basic `index.tsx` and `_layout.tsx`
- Help you start building your app from a clean slate

## Status
✅ Mobile app 0x00 successfully created and configured.