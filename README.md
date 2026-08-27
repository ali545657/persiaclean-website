# PersiaClean

Marketing website for **PersiaClean**, an eco-conscious cleaning company based in Grande Prairie, Alberta.

## About

PersiaClean offers residential and commercial cleaning services with a focus on environmentally friendly products and practices. This repository contains the company's public-facing marketing site: a single-page site covering services, about, and contact information.

## Tech stack

Plain static HTML/CSS/JS — no framework, no bundler, no package manager, no build step.

- `index.html` — the entire site (hero, services, about, contact, etc. as sections in one page)
- `css/styles.css` — all styling
- `js/main.js` — page behavior (sticky header, mobile nav toggle, etc.), written as small independent blocks in a single IIFE
- `assets/` — images and other static assets

An inline SVG `<symbol>` icon sprite lives near the top of `<body>` in `index.html`; icons are referenced elsewhere via `<use href="#icon-name">`.

Fonts (Inter + Instrument Serif) are loaded from Google Fonts.

## Running locally

No build step required. Either:

- Open `index.html` directly in a browser, or
- Serve the folder with any static file server, e.g.:
  ```
  npx serve .
  ```

## Branding

Visual and voice guidelines are defined in the PersiaClean brand guide (colors, typography, tone). Keep any styling or copy changes consistent with it.
