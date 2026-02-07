# Image Assets Guide

Since the automated image generation service has reached its daily quota, you will need to add images manually to the project.

Please place your image files in the following directories. The `architecture_services_content.json` file currently points to placeholder images, but you can update it to point to these local files once you have them.

## Directory Structure

`public/assets/images/`
  ├── `hero/` (Big images for Services)
  │     ├── `service_architecture.webp` (1920x1080)
  │     ├── `service_interior.webp` (1920x1080)
  │     ├── `service_renovation.webp` (1920x1080)
  │     ├── `service_vastu.webp` (1920x1080)
  │     └── `service_construction.webp` (1920x1080)
  │
  └── `portfolio/` (Smaller images for Projects)
        ├── `elevation_modern.webp` (800x600)
        ├── `elevation_commercial.webp` (800x600)
        ├── `elevation_classic.webp` (800x600)
        ├── `architecture_apartment.webp` (800x600)
        ├── `architecture_resort.webp` (800x600)
        ├── `architecture_campus.webp` (800x600)
        ├── `interior_living.webp` (800x600)
        ├── `interior_office.webp` (800x600)
        └── `interior_lobby.webp` (800x600)

## Updating Content

Once you have your images ready:
1. Save them in the folders as listed above.
2. Open `architecture_services_content.json`.
3. Replace the `https://placehold.co/...` links with the local path, e.g., `/assets/images/hero/service_architecture.webp`.
