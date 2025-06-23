#!/bin/bash
# Navigate to backend, install & run
cd server
npm install
npm run start &

# Navigate to frontend, install & run
cd ../client
npm install
npm run start
