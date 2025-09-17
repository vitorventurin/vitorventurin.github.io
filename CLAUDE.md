# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is Vitor Venturin's personal portfolio website hosted on GitHub Pages at `vitorventurin.github.io`. It's a static HTML/CSS/JS website showcasing professional work and projects.

## Architecture

The website consists of several main components:

- **Main Portfolio Site**: `index.html` - Bootstrap-based portfolio using Start Bootstrap Freelancer theme
- **CV Pages**:
  - `cv.html` - Styled CV page with Bootstrap
  - `formal_cv.html` - Print-optimized formal CV with inline styles
- **Project Subdirectories**:
  - `bela/` - React application (built/compiled version)
  - `memefy/`, `sonora/`, `sopa/` - Privacy policy pages for iOS apps

## File Structure

- `/` - Root contains main HTML files
- `css/` - Contains main stylesheet (`styles.css`) and CV-specific styles
- `js/` - Contains Bootstrap scripts and custom JavaScript
- `assets/` - Images and media files
- Project folders contain standalone pages/apps for individual projects

## Key Technologies

- **Frontend Framework**: Bootstrap 4.5.3 (via Start Bootstrap Freelancer v6.0.5 theme)
- **JavaScript Libraries**: jQuery with easing for smooth scrolling
- **Styling**: Custom CSS built on Bootstrap foundation
- **Analytics**: Google Analytics integration
- **Icons**: Font Awesome 6.0

## Common Development Tasks

**Local Development**:
- No build process required - static HTML/CSS/JS
- Open `index.html` directly in browser for local testing
- Changes to CSS/JS files require browser refresh

**Deployment**:
- Committed changes are automatically deployed via GitHub Pages
- Site is accessible at `https://vitorventurin.github.io/`

## Styling Conventions

- Main theme uses custom color scheme with `--primary: #FF4500` and `--secondary: #2c3e50`
- Bootstrap classes are used throughout for responsive design
- Custom CSS extensions follow Bootstrap naming conventions
- CV pages use clean, professional styling optimized for printing

## Content Structure

- Portfolio sections include navigation, about, portfolio grid, and contact
- SEO meta tags and Open Graph tags are properly configured
- Social media links and professional information are embedded
- Privacy policies for iOS apps follow standard mobile app privacy policy format