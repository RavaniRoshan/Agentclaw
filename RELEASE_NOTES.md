## What's New in v0.3.2

### 🪶 Hand-Crafted CLI Welcome Banner
Replaced the figlet-based ASCII art with a premium, box-drawn terminal experience inspired by Vite and Astro.

- **Sentinel Raven glyph** — minimal 3-line ASCII raven with diamond eye (◈)
- **Original gradient palette** — violet, purple, blue, green, lavender from the SVG brand assets
- **Structured layout** — server status, quick start steps, docs links, all inside Unicode box-drawing borders
- **Terminal-width aware** — graceful fallback for narrow terminals (< 60 chars)
- **Dynamic versioning** — version string reads from package.json at runtime, never hardcoded again

### 📦 Dependency Cleanup
- **Removed figlet** — saves ~460KB from the npm tarball
- Zero new dependencies added

### 🔢 Version Alignment
- All version strings across npm and Python are now synchronized at 0.3.2
- Health endpoints (Node + Python) both return 0.3.2
- README changelog and roadmap updated

### Install
```bash
# npm CLI
npx openjck@latest

# Python instrumentation
pip install openjck==0.3.2
```

**Full Changelog**: https://github.com/RavaniRoshan/openjck/compare/v0.3.0...v0.3.2
