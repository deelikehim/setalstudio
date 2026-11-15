# Update SETAL Studio contact alerts and portfolio

## What will change
- Include the submitted company name in the Telegram contact alert.
- Replace fictional demo portfolio entries with SETAL's real website projects and show six projects in the homepage feature section. Use the existing SETAL Studio site as the sixth project because five other live projects are currently listed.
- Leave GitHub linking to the project settings flow, since it requires the user's repository and account authorization.

## Technical details
- Update the contact notification payload/formatter and the centralized portfolio list used by the home and work pages.
- Validate the changes with the project build and a targeted notification test if test infrastructure is available.
- After implementation, run the required package security update without changing unrelated dependencies.
