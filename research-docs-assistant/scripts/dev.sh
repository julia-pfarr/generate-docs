#!/bin/bash

# This script sets up the development environment for the Research Docs Assistant application.

# Exit immediately if a command exits with a non-zero status.
set -e

# Install dependencies
echo "Installing dependencies..."
npm install

# Start the development server
echo "Starting the development server..."
npm run dev

# Open the application in the default web browser
echo "Opening the application in your default web browser..."
xdg-open http://localhost:3000 || open http://localhost:3000

echo "Development environment setup complete."