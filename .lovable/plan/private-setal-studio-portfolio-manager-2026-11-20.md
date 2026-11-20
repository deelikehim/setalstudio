# Private SETAL Studio portfolio manager

## Experience
- Add a private `/admin` page with email/password sign-in for the two supplied email addresses only.
- Let the signed-in owner create, edit, publish, unpublish, and remove work entries, choose a project type (website, logo, or another custom type), and set separate homepage and Work-page positions.
- Support project image uploads and image URLs; keep public visitors limited to published entries.
- Replace static project lists on the homepage and Work page with the saved, separately ordered portfolio entries.

## Security and data
- Keep public sign-up disabled; authorize the exact two email addresses on the server and enforce admin-only writes with database policies.
- Add profile records and protected admin roles, with profile creation handled automatically for new accounts.
- Create the portfolio schema, access rules, storage rules, and initial rows for the existing portfolio in Lovable Cloud.
- Email/password accounts must be created in Lovable Cloud’s Users area; this project does not expose account creation to visitors.

## Technical approach
- Use the existing TanStack Start and generated Cloud client; keep private data operations behind authenticated server functions and row-level policies.
- Use Lovable Database migrations for schema and policy changes, and Cloud Storage for portfolio images.
- Verify existing portfolio display, admin sign-in gating, and project management; add focused tests for access and ordering rules where the existing setup allows.
