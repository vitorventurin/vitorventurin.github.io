---
layout: default
modal-id: 3
date: 2024-01-12
img: mojo.png
alt: Mojo Player
project-date: 2025
client: Personal Project
category: iOS & Android
icon: fas fa-music
links:
  - title: AppStore link
    url: https://apps.apple.com/us/app/mojo-player/id6774632879
    icon: fa-brands fa-apple
  - title: Google Play
    url: https://play.google.com/store/apps/details?id=io.github.vitorventurin.musicalibre_android
    icon: fa-brands fa-google-play
description: "MOJO is a free, ad-free music player that brings your scattered music collection together in one place. Import tracks from YouTube, YouTube Music, Bandcamp, and SoundCloud, and MOJO organizes everything into a clean library by artist, album, and playlist, with a built-in player. Everything lives on your device: no cloud required. It is the mobile evolution of Musicalibre, the original web scraper."
---

**Role:** Founder and sole developer, from product and design to both native apps and release.

### Highlights

- Shipped native apps on both platforms: Swift and SwiftUI on iOS, Kotlin and Jetpack Compose on Android.
- Built a multi-source import pipeline that turns tracks from different platforms into one consistent library.
- Built CI/CD pipelines for different app variants: Debug, QA, Alpha and Release (Prod).
- Designed a custom dark design system (amber accent) applied across Library, Now Playing and Search.
- Growing an organic early user base with no paid promotion.

### Design

- Designed the UI in Wonder: one "Mojo Player" file with an artboard per screen (Library, Album Detail, Artist Detail, Now Playing), in dark and light variants.
- Design tokens (colors, typography, shapes) were read straight from the artboards into a token layer in code, so screens never use raw hex values.
- Reusable Wonder pieces (tab bar, mini player, pills, media cards, track and album rows) became a shared component layer, and each screen is composed from it.
- Every screen and component is guarded by screenshot tests, so the build stays faithful to the design.

<div class="project-screens">
  <figure><img src="img/portfolio/mojo/library.png" alt="MOJO Library screen"><figcaption>Library</figcaption></figure>
  <figure><img src="img/portfolio/mojo/album.png" alt="MOJO Album Detail screen"><figcaption>Album Detail</figcaption></figure>
  <figure><img src="img/portfolio/mojo/artist.png" alt="MOJO Artist Detail screen"><figcaption>Artist Detail</figcaption></figure>
  <figure><img src="img/portfolio/mojo/now-playing.png" alt="MOJO Now Playing screen"><figcaption>Now Playing</figcaption></figure>
</div>

### Backend

- Built the MOJO backend in Python with Flask, exposing a REST API consumed by both the iOS and Android apps.
- The API receives a track link, resolves it on the source platform and returns the audio and metadata for the app to store locally.
- Hosted on a self-managed Linux Mint server.

### Tech

Swift, SwiftUI, SwiftData, AVFoundation, Kotlin, Jetpack Compose, Firebase (Auth, Analytics, Crashlytics), Kingfisher, Python, Flask
