# Image Assets Guide

## Current Setup: Dynamic Web Images
I have updated the `architecture_services_content.json` file to use **LoremFlickr**, a service that provides random, high-quality stock photos based on keywords.

- **How it works**: The website will automatically fetch images like "architecture", "interior", "construction" from the web.
- **Advantage**: you immediately see relevant visuals without manually downloading files.
- **Note**: The images may change on every refresh until you replace them with your own permanent files.

## Replacing with Your Own Images (Recommended for Production)

When you are ready to use your own portfolio images:

1.  **Place your images** in the folders I created:
    `public/assets/images/`
      ├── `hero/` (Big images, 1920x1080)
      │     ├── `service_architecture.webp`
      │     ├── `service_interior.webp`
      │     └── ...
      │
      └── `portfolio/` (Smaller images, 800x600)
            ├── `elevation_modern.webp`
            ├── `interior_living.webp`
            └── ...

2.  **Update `architecture_services_content.json`**:
    Open the file and change the URLs from `https://loremflickr.com/...` to your local path, e.g.:
    `"image": "/assets/images/hero/service_architecture.webp"`

## Image Dimensions
- **Hero Images**: 1920x1080 pixels (Landscape, high quality)
- **Portfolio Images**: 800x600 pixels (Standard 4:3 or similar)
