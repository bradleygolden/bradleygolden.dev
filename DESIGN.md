---
version: alpha
name: "Bradley Golden: Daylight / Thermal"
description: "One-page personal site for Bradley Golden. The page is split at a seam through his face. Left of it is daylight (paper, ink and the real photo); right of it is the same moment as a thermal camera sees it."
colors:
  primary: "#121212"
  paper: "#F4F4F1"
  ink: "#121212"
  soft: "#4A4A47"
  night: "#07051C"
  heat: "#FF9D45"
  hot: "#E2420D"
  on-night: "#FFFFFF"
typography:
  name:
    fontFamily: Funnel Display
    fontSize: 12.5rem
    fontWeight: 760
    lineHeight: 0.82
    letterSpacing: -0.028em
  name-phone:
    fontFamily: Funnel Display
    fontSize: 3rem
    fontWeight: 760
    lineHeight: 0.82
    letterSpacing: -0.028em
  statement:
    fontFamily: Funnel Display
    fontSize: 2.125rem
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: -0.018em
  statement-phone:
    fontFamily: Funnel Display
    fontSize: 1.625rem
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: -0.018em
  body:
    fontFamily: Funnel Display
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: 0px
spacing:
  gutter-phone: 20px
  gutter-desktop: 72px
  top: 48px
  bottom: 56px
  statement-gap: 40px
  body-gap: 20px
  link-target: 48px
components:
  page-daylight:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
  page-thermal:
    backgroundColor: "{colors.night}"
    textColor: "{colors.heat}"
  name-first:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.name}"
  name-last:
    backgroundColor: "{colors.night}"
    textColor: "{colors.heat}"
    typography: "{typography.name}"
  statement:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.statement}"
  about:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.soft}"
    typography: "{typography.body}"
  links:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-night}"
    height: 48px
  link-hover-underline:
    backgroundColor: "{colors.hot}"
    height: 2px
    rounded: "{rounded.none}"
---

## Overview

**Daylight / Thermal.** HVAC technicians use thermal cameras to see what the eye can't. The site borrows that
tool. A vertical seam runs down the middle of the page and through Bradley's face. To the left is daylight:
off-white paper, black type and his real photo. To the right is the same scene as a thermal camera sees it:
night background, his body as heat, and the type in the camera's warm orange. His name sits on the seam, so
"Bradley" is in daylight and "Golden" is literally golden.

The seam is the page's single interaction. With a mouse it follows the pointer across the portrait. On a phone
you drag the portrait. On arrival it sweeps in once from the right, and with reduced motion it is already
parked. Keyboard users get a range control that is visible only while it has focus. Everything you read sits
in daylight, and the ways to reach him sit in the dark corner, which stays thermal wherever the seam is.

It echoes recursivesystems.dev without copying it. The orange is a cousin of its vermilion, the company's own
lockup is the main link and the mark is on his cap, but the type, palette and layout are Bradley's own.

## Colors

- **Paper (#F4F4F1)** and **Ink (#121212, also `primary`)**: daylight. A neutral, slightly warm off-white rather than cream or
  pure white; the ink is near black.
- **Soft (#4A4A47)**: the about paragraph, a step quieter than the statement (about 8.4:1 on paper).
- **Night (#07051C)**: the thermal camera's cold background. It only ever appears right of the seam and in the
  phone's closing band, never as a "dark mode".
- **Heat (#FF9D45)**: the camera's warm orange. Used for "Golden" and for text inside the thermal view. It is
  also the warm end of the portrait's palette.
- **Hot (#E2420D)**: the 2px underline that slides in under a hovered or focused link. Nothing else.
- **On-night (#FFFFFF)**: logos and the company lockup on night. White is each brand's allowed reverse.

The thermal portrait uses a palette made from these same colours: night, deep blue, violet, rust, Heat, pale
and paper. It is not a stock heat-map preset.

## Typography

One self-hosted family, **Funnel Display** (variable, 300–800, SIL OFL, about 18 KB for the Latin woff2). It is
contemporary and has sharp, distinctive cuts. It isn't Inter, Geist or Archivo.

- **Name**: weight 760, sized so "Bradley" ends exactly at the seam: `font-size: calc((50vw - gutter) / 3.66)`
  (about 12.5rem at 1440px, 3rem at 390px). The same rule holds at every width, so on a phone the seam still
  falls between the first and last name.
- **Statement**: weight 500, 1.375–2.125rem. On desktop it breaks at "I run a growth agency / for independent
  residential / HVAC companies." On a phone it is balanced.
- **Body**: weight 400, 1–1.125rem, line height 1.5, 40ch maximum.
- No uppercase labels, no monospace, no second family.

## Layout

- **Desktop**: two equal columns split by the seam. The name runs across the top. The portrait is
  bottom-anchored at 74svh, with the centre of his face (48.5% of the image width) on the seam. The statement
  and about stack under "Bradley" in daylight. The company lockup and social marks sit bottom-right on night.
  The page reads in a Z: name, then what he does, then the links.
- **Phone**: the name and the portrait (300px, cropped at the crossed arms) form one split block. Below it are
  the statement and the about on paper, then the links in a night band that closes the page.
- Gutters: 20px on a phone, up to 72px on desktop. Links have 48px targets.

## Elevation & Depth

None. Two flat layers: daylight, and the thermal copy above it clipped at the seam. No shadows, blur or glow.

## Shapes

Square corners throughout (`rounded.none`). The only shapes are the seam and the 2px hover underline.

## Components

- **Seam**: the thermal layer is a clone of the page made at build time (`aria-hidden`, `inert`) and clipped by
  `clip-path` right of `--sx`. It works without script: CSS parks the seam at 50% on desktop, and on a phone
  only the name band is split.
- **Company link**: Recursive Systems' own lockup (the mark and wordmark from recursivesystems.dev's OG card),
  plus a small outbound arrow. It carries `aria-label="Recursive Systems"`.
- **Social links**: official marks only. LinkedIn is the In-Bug from LinkedIn's brand kit (it ships PNG only,
  and Simple Icons removed it at LinkedIn's request). Instagram and YouTube are from Simple Icons (CC0). All are
  white on night, unrecoloured and undistorted, each with an aria-label and a 48px target.
- **Scan control**: `<input type="range" aria-label="Thermal view: move the line across the photo">`. It is
  hidden until focused, with a split ink/heat thumb.

## Do's and Don'ts

- Do keep the seam on his face. It is the page's one idea and every alignment hangs off it.
- Do keep everything you read in daylight.
- Do replace the thermal half with a real thermal photo when one exists. A FLIR phone attachment, or one an
  HVAC client owns, would make it true rather than simulated.
- Don't add HUD graphics, crosshairs, temperature read-outs, scanlines or glow. Crosshairs over a face read as
  a gun sight.
- Don't recolour the LinkedIn, Instagram or YouTube marks, and don't make them orange on hover. The hover cue
  is the underline.
- Don't add a second typeface, rounded cards, badges or a "Let's talk" button.
- Don't use a generated image of a person, here or anywhere else on the page.
