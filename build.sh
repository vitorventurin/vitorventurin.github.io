#!/bin/bash

echo "Building Jekyll site..."

# Check if bundle is installed
if ! command -v bundle &> /dev/null; then
    echo "Bundle not found. Installing..."
    gem install bundler
fi

# Install dependencies
echo "Installing dependencies..."
bundle install

# Build the site
echo "Building site..."
bundle exec jekyll build

echo "Build complete! Site generated in _site directory."
echo "To serve locally, run: bundle exec jekyll serve"