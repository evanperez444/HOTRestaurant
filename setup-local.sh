#!/bin/bash

# Add local dev script to package.json
sed -i 's/"dev": "NODE_ENV=development tsx server\/index.ts",/"dev": "NODE_ENV=development tsx server\/index.ts",\n    "dev:local": "node local-server.js",/g' package.json

# Create images directory if it doesn't exist
mkdir -p client/public/images

# Copy images from attached_assets to public directory if they exist
if [ -d "attached_assets" ]; then
  cp attached_assets/*.jpg client/public/images/ 2>/dev/null || echo "No jpg files found in attached_assets"
fi

echo "Setup complete!"
echo "Run 'npm install' to install dependencies"
echo "Then run 'npm run dev:local' to start the development server"