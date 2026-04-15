# Gear AI (Flutter)

A minimal Material 3 Flutter web app with a black chat screen, logo-only top area, and a single input field with the placeholder `input text to send`.

## Run locally

```bash
flutter pub get
flutter run -d chrome
```

## GitHub Pages deployment

This repository includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that:

1. Installs Flutter.
2. Builds the web app.
3. Deploys `build/web` to GitHub Pages.

To use it, set GitHub Pages source to **GitHub Actions** in repository settings.
