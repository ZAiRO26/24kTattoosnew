CTA Color Theme Specification

Overview
- Reference section: `http://localhost:8080/tattoo-academy/basic-courses` (CTA)
- Target section: `http://localhost:8080/tattoo-academy/short-term-courses` (CTA)
- Goal: Exact color theme replication including background, text, buttons, borders, transitions.

Palette (from `tailwind.config.js`)
- Background: `accent-gold` — `#d4af37`
- Primary text: `minimal-black` — `#2a2a2a`
- Secondary text (on dark buttons): `minimal-white` — `#fafafa`
- Hover on primary button: `minimal-dark-gray` — `#3a3a3a`

CTA Background
- Reference uses solid background: `bg-accent-gold` (`#d4af37`).
- No gradients are applied in CTA.

CTA Typography Colors
- Heading (`h2`): `text-minimal-black` (`#2a2a2a`).
- Subtext (`p`): `text-minimal-black` (`#2a2a2a`).

Buttons
- Primary (ENROLL NOW):
  - Normal: `bg-minimal-black` (`#2a2a2a`) + `text-minimal-white` (`#fafafa`).
  - Hover: `hover:bg-minimal-dark-gray` (`#3a3a3a`) + `text-minimal-white`.
  - Transition: `transition-colors duration-200`.
  - Border: none.
- Secondary (VIEW ALL COURSES, Short Term page only, aligned to theme):
  - Normal: `border-2 border-minimal-black` (`#2a2a2a`) + `text-minimal-black` (`#2a2a2a`).
  - Hover: `hover:bg-minimal-black` (`#2a2a2a`) + `hover:text-minimal-white` (`#fafafa`).
  - Transition: `transition-colors duration-200`.

Decorative Elements
- None in CTA beyond solid background and buttons.
- Borders used only for the secondary button on Short Term CTA, color: `#2a2a2a`.

Animations / Transitions
- Color transition: `transition-colors duration-200` on buttons.
- No gradient or animated background in CTA.

Accessibility (Contrast Ratios)
- `#2a2a2a` text on `#d4af37` background: ≈ 6.8:1
  - Meets WCAG 2.1 AA for normal text (≥4.5:1).
  - Meets WCAG 2.1 AAA for large text (≥4.5:1).
- `#fafafa` text on `#2a2a2a` button: ≈ 13.7:1
  - Meets WCAG 2.1 AAA for all text sizes.

Implementation Notes
- Short Term Courses CTA updated to use identical color classes as Basic Courses CTA for background, text, and primary button.
- Secondary button styled using the same palette to maintain theme consistency.
- Verify visually at breakpoints: mobile (`sm`), tablet (`md`), desktop (`lg`).

File References
- `src/pages/BasicTattooCoursesPage.jsx` (reference CTA).
- `src/pages/ShortTermCoursesPage.jsx` (updated target CTA).