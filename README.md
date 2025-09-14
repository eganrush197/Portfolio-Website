# Kara Walker Portfolio Website

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

You can add additional font weights later if needed. The browser will fall back to sans-serif if any fonts are missing.

## How to Add Your Images

### 1. Landing Page Background
- Add your landing page background image as `images/landing-bg.jpg`
- The image should be high resolution and work well in black & white (grayscale filter is applied)
- Recommended size: 1920x1080 or larger

### 2. Artwork Images
- Add your artwork images to the `images/artworks/` folder
- Supported formats: JPEG, JPG, PNG
- Images will maintain their native aspect ratios
- Name them descriptively (e.g., `drawing-2020-01.jpg`)

### 3. Update HTML for Your Artworks
- Edit the `index.html` file
- Update the artwork grid section with your actual images:
  ```html
  <div class="artwork-item" data-image="images/artworks/your-image.jpg">
      <img src="images/artworks/your-image.jpg" alt="Your artwork description" class="artwork-thumbnail">
  </div>
  ```

## Features Implemented

✅ **Landing Page**
- Full-screen background image with grayscale filter
- "KARA WALKER" title and "ENTER" button
- Responsive design for mobile and desktop

✅ **Fade Transition**
- 1-second smooth fade from landing to main page
- Landing page completely disappears after transition
- Only accessible again by page reload

✅ **Main Portfolio Page**
- Clean navigation header
- Year-based artwork sections
- Grid layout for artwork thumbnails
- Responsive design

✅ **Image Lightbox**
- Click any artwork to view larger version
- Modal overlay with close functionality
- Keyboard support (Escape to close)
- Click outside image to close

✅ **Responsive Design**
- Mobile-first approach
- Adapts to different screen sizes
- Touch-friendly interactions

## Next Steps

1. Add your actual images to the appropriate folders
2. Update the HTML with your artwork information
3. Create the navigation pages (Selected Works, Biography, etc.)
4. Test the functionality
5. Customize colors, fonts, or layout as needed

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
