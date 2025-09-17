# Vitor Venturin Portfolio Website

A professional portfolio website showcasing the work of Vitor Venturin, Senior iOS Developer, hosted on GitHub Pages.

🌐 **Live Site**: [vitorventurin.github.io](https://vitorventurin.github.io)

## 🚀 Overview

This is a static portfolio website built with modern web technologies, featuring a responsive design and showcasing professional projects, experience, and contact information. The site serves as the digital presence for Vitor Venturin's professional brand.

## 🛠 Tech Stack

### Frontend Framework
- **Bootstrap 4.5.3** - Responsive CSS framework
- **Start Bootstrap Freelancer v6.0.5** - Professional theme template

### JavaScript Libraries
- **jQuery 3.x** - DOM manipulation and event handling
- **jQuery Easing** - Smooth scrolling animations

### Styling & Design
- **Custom CSS** built on Bootstrap foundation
- **Font Awesome 6.0** - Professional iconography
- **Google Fonts** - Typography (Montserrat, Lato, Inter)

### Analytics & Performance
- **Google Analytics** (UA-3322202-2) - Traffic tracking and user analytics

### External Integrations
- **YouTube Embeds** - Video content for portfolio demonstrations
- **Social Media Links** - Professional networking integration

## 📁 Project Structure

```
/
├── index.html              # Main portfolio page
├── cv.html                 # Interactive CV page
├── formal_cv.html          # Print-optimized formal CV
├── css/
│   ├── styles.css         # Main stylesheet (Bootstrap + custom)
│   └── cv.css             # CV-specific styles
├── js/
│   └── scripts.js         # Custom JavaScript functionality
├── assets/
│   ├── img/
│   │   ├── memojitiv.png  # Profile avatar
│   │   └── portfolio/     # Portfolio project images
│   └── vid/               # Video assets
├── bela/                  # React application (built)
├── memefy/               # iOS app privacy policy
├── sonora/               # iOS app privacy policy
└── sopa/                 # iOS app privacy policy
```

## ✨ Features

### Main Portfolio Site (`index.html`)
- **Responsive Navigation** - Fixed navbar with smooth scrolling
- **Hero Section** - Professional introduction with avatar
- **Portfolio Grid** - Interactive project showcase with modal details
- **About Section** - Professional background and experience
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards

### CV Pages
- **Interactive CV** (`cv.html`) - Web-optimized resume with modern styling
- **Formal CV** (`formal_cv.html`) - Print-ready professional resume

### Portfolio Projects Featured
1. **KLM** - Corporate project
2. **Sonora** - Audio manipulation app (Godot/GDScript)
3. **Knightmare** - Game remake (Godot/GDScript)
4. **Memefy** - iOS meme creation app (Swift/UIKit)
5. **Itaú** - Banking application
6. **Sopa** - Word puzzle game
7. **Safra** - Banking application
8. **Rooomy** - Real estate application
9. **Musicalibre** - Music application
10. **Bela** - React web application
11. **DP6** - Analytics platform

### Interactive Elements
- **Modal Portfolio Details** - Click-to-expand project information
- **Smooth Scrolling** - Enhanced navigation experience
- **Responsive Design** - Mobile-first approach
- **Video Integration** - YouTube embeds for project demonstrations

## 🎨 Design System

### Color Palette
- **Primary**: `#FF4500` (Orange Red)
- **Secondary**: `#2c3e50` (Dark Blue Gray)
- **Success**: `#28a745` (Green)
- **Info**: `#17a2b8` (Cyan)
- **Warning**: `#ffc107` (Yellow)
- **Danger**: `#dc3545` (Red)

### Typography
- **Primary Font**: Lato (sans-serif)
- **Heading Font**: Montserrat (sans-serif)
- **CV Font**: Inter (sans-serif)

### Responsive Breakpoints
- **xs**: 0px
- **sm**: 576px
- **md**: 768px
- **lg**: 992px
- **xl**: 1200px

## 🚀 Development

### Local Development
```bash
# No build process required - static HTML/CSS/JS
# Simply open index.html in your browser
open index.html

# For live reload during development, you can use:
python -m http.server 8000
# or
npx live-server
```

### File Editing
- **HTML**: Direct editing of `.html` files
- **Styles**: Modify `css/styles.css` for main site, `css/cv.css` for CV pages
- **JavaScript**: Edit `js/scripts.js` for custom functionality
- **Assets**: Add images to `assets/img/` directory

### Testing
- **Cross-browser testing** recommended
- **Mobile responsiveness** testing across devices
- **SEO validation** using tools like Google PageSpeed Insights

## 🌐 Deployment

### GitHub Pages
- **Automatic deployment** from `develop` branch
- **Custom domain** configured for vitorventurin.github.io
- **HTTPS enabled** by default

### Manual Deployment
```bash
# Commit changes
git add .
git commit -m "Update portfolio content"
git push origin develop

# Changes are automatically deployed to GitHub Pages
```

## 📊 Analytics & Performance

### Google Analytics Integration
- **Tracking ID**: UA-3322202-2
- **Enhanced Ecommerce**: Configured for goal tracking
- **User behavior**: Page views, session duration, bounce rate

### Performance Optimizations
- **Image optimization** for web delivery
- **Minified CSS** via Bootstrap CDN
- **Lazy loading** considerations for large assets
- **Mobile-first** responsive design

## 🔧 Customization

### Adding New Portfolio Items
1. Add project image to `assets/img/portfolio/`
2. Update portfolio grid in `index.html`
3. Create corresponding modal with project details
4. Update any relevant privacy policies if needed

### Updating Content
- **About section**: Edit `index.html` around line 197
- **Contact information**: Update throughout relevant sections
- **CV content**: Modify `cv.html` or `formal_cv.html`

### Styling Changes
- **Color scheme**: Update CSS custom properties in `css/styles.css`
- **Fonts**: Modify Google Fonts imports and font-family declarations
- **Layout**: Adjust Bootstrap grid classes and custom CSS

## 📱 Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 11+
- **Edge** 16+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🔒 Security Features

- **HTTPS enforcement** via GitHub Pages
- **Content Security Policy** considerations
- **XSS protection** through proper HTML escaping
- **Privacy compliance** with GDPR considerations

## 📄 License

This project uses several open-source components:
- **Start Bootstrap Freelancer** - MIT License
- **Bootstrap** - MIT License
- **Font Awesome** - Free License
- **jQuery** - MIT License

## 👨‍💻 Developer Information

**Vitor Venturin Linhalis**
- **Role**: Senior iOS Developer
- **Location**: Netherlands (Amsterdam area)
- **Experience**: 10+ years in software engineering
- **Specialization**: Swift, iOS development, multi-platform experience

### Contact & Social
- **Website**: [vitorventurin.github.io](https://vitorventurin.github.io)
- **Twitter**: [@vitorventurin](https://twitter.com/vitorventurin)
- **Professional Background**: International experience in Netherlands and Brazil

---

*This README provides comprehensive documentation for developers working with Vitor Venturin's portfolio website. The site serves as both a professional showcase and a technical demonstration of modern web development practices.*