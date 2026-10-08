# Private case studies

Private case studies are grouped. The homepage shows one card per group (today, a
single RBC card). Clicking it opens a password modal without leaving the homepage:
a centred dialog on larger screens and a shadcn Drawer bottom sheet on phones (under 768px).
The password is checked against a small encrypted group file. Once it is verified,
the modal turns into a picker that lists every case study in the group. Choosing
one decrypts that study and opens its route, for example `/work/rbc/account-opening`
or `/work/rbc/newcomer-hub`. `/work/rbc` opens the modal, and a locked study link
returns to the homepage modal, then goes straight to that study after the password.
Page shells contain no private project content. Each study and its screenshots are
packaged together as encrypted JSON, which GitHub Pages can serve without a backend.

## Source and password

Each case study lives in `.private/<project-id>/`: `study.json`, its images, an
optional `thumbnail.webp` (640 × 400) for the picker, and `password.txt`. Each group
lives in `.private/<group-id>/`: `group.json` (`{ "projects": [...] }`) and the group
`password.txt`. Every study in a group must use the group's password; the group
script refuses to package otherwise. Use restrictive file permissions. The
`.private/` directory is ignored by Git and blocked by the Vite development server.
Never move sources, thumbnails, or passwords into `src/`, `public/`, a `VITE_`
environment variable, tests, or a public repository.

The `ProtectedCaseStudy` type in `src/app/lib/protected-case-study.d.mts` defines
the source format. Each figure refers to a local raster image by its `asset` path
relative to its private project folder, with descriptive `alt` text and an optional
`caption`. `format: "desktop" | "mobile"` with a `label` makes a figure expandable.
`decisionLabels` renames the two columns of a `decisions` table, and a point may be
a title without a body. Write only claims supported by the supplied project
material. Keep drafts and unverified outcomes out of the published story.

After changing content, screenshots, thumbnails, or the password, run:

```sh
npm run protect:case-study -- <project-id>   # once per changed study
npm run protect:group -- <group-id>          # re-checks passwords, packs thumbnails
```

Commit only the resulting `public/protected/*.json` files, the UI code, and
deliberately public card text or artwork. Normal `npm run build` uses the encrypted
artifacts; CI needs neither the password nor the private source. Back up the
private folder separately.

To add a study to a group: create its private folder, add its ID to the group's
`group.json`, add the ID, route, title, and summary to
`src/app/lib/protected-projects.ts`, then run both commands above.

## Protection and limitations

- AES-256-GCM encryption with random 16-byte salt and 12-byte IV on each run.
- PBKDF2-SHA-256 with 600,000 iterations derives the key from the password.
- The project or group ID is authenticated along with the ciphertext.
- The verified password, decrypted content, and image Blob URLs stay in page
  memory only while the modal is open or a protected study is on screen, so a
  visitor can switch studies without retyping it. Refreshing, leaving the
  protected routes, or closing the picker from the homepage forgets it. There
  is no separate lock control. No unlock token is stored in browser storage.
- Public: the card text, study titles and summaries, and a blurred card image
  (`src/assets/rbc-private-cover.webp`, blurred in the file itself). Picker
  thumbnails and all case-study images are encrypted.
- Visitors can download the encrypted files and try passwords offline, so use a
  strong unique passphrase. A shared-password static site has no per-person
  access controls, rate limiting, or reliable revocation of previous downloads.
  Anyone with the password can save or share the unlocked material.

## Verification

`npm run test:protection` verifies correct-password decryption, wrong-password
rejection, tampering detection, project binding, and fresh encryption randomness.
Also check the modal, picker, and unlocked pages in light/dark themes and on
mobile, confirm refresh and navigation clear access, confirm `.private`
requests return 403, and scan the production build for private plaintext.

## Current content

The `rbc` group contains, in picker order:

- `rbc-newcomer-hub`: the Newcomers Resource Hub, written from the owner's
  narrative, with the final desktop and mobile designs. Sources are recorded in
  `.private/rbc-newcomer-hub/sources.md`.
- `rbc-account-opening`: the chequing and savings account redesign, with a laptop
  mockup cover.

`.private/rbc/study.json` and `.private/rbc/images/` are the account-opening
source from before the group existed. They are no longer packaged and can be
deleted once the owner confirms.
