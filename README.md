# Egan Z Portfolio Website

## Project Structure

```
/
├── index.html              # Main landing and portfolio page
├── css/
│   ├── landing.css        # Landing page styles
│   ├── main.css          # Main portfolio styles
│   └── transitions.css   # Animation and transition styles
├── js/
│   ├── transitions.js    # Landing to main page transition
│   └── main.js          # Main functionality (modal, interactions)
├── fonts/               # Custom font files
│   └── HelveticaNeue-Thin.otf
├── images/
│   ├── landing-bg.jpg    # Landing page background image
│   ├── artworks/         # Portfolio artwork images
│   │   ├── artwork1.jpg
│   │   ├── artwork2.jpg
│   │   └── artwork3.jpg
│   └── gallery/          # Gallery page images
│       ├── gallery1.jpg
│       ├── gallery2.jpg
│       └── gallery3.jpg
├── pages/               # Navigation pages
│   ├── selected-works.html
│   ├── editions.html
│   ├── news.html        # Gallery page (renamed from news)
│   ├── biography.html
│   └── contact.html
└── README.md           # This file
```

## Font Setup

The site uses Helvetica Neue Thin from the `fonts/` folder:
- `HelveticaNeue-Thin.otf` - Currently loaded and working

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Uses CSS Grid and Flexbox for layout
- JavaScript ES6+ features

## Development Notes

- The site is built with vanilla HTML, CSS, and JavaScript
- No external dependencies or frameworks
- Images are loaded at native dimensions
- Smooth animations and transitions throughout
- Accessible keyboard navigation
