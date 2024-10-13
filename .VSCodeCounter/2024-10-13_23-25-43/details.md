# Details

Date : 2024-10-13 23:25:43

Directory /home/tach/tach/nextjs/magreth

Total : 65 files,  10607 codes, 32 comments, 1964 blanks, all 12603 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [.eslintrc.json](/.eslintrc.json) | JSON | 37 | 0 | 1 | 38 |
| [README.md](/README.md) | Markdown | 46 | 0 | 16 | 62 |
| [ai/actions.ts](/ai/actions.ts) | TypeScript | 125 | 0 | 10 | 135 |
| [ai/custom-middleware.ts](/ai/custom-middleware.ts) | TypeScript | 2 | 0 | 2 | 4 |
| [ai/index.ts](/ai/index.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [app/(auth)/actions.ts](/app/(auth)/actions.ts) | TypeScript | 70 | 0 | 16 | 86 |
| [app/(auth)/api/auth/[...nextauth]/route.ts](/app/(auth)/api/auth/%5B...nextauth%5D/route.ts) | TypeScript | 1 | 0 | 1 | 2 |
| [app/(auth)/auth.config.ts](/app/(auth)/auth.config.ts) | TypeScript | 31 | 2 | 7 | 40 |
| [app/(auth)/auth.ts](/app/(auth)/auth.ts) | TypeScript | 47 | 0 | 7 | 54 |
| [app/(auth)/login/page.tsx](/app/(auth)/login/page.tsx) | TypeScript JSX | 56 | 0 | 10 | 66 |
| [app/(auth)/register/page.tsx](/app/(auth)/register/page.tsx) | TypeScript JSX | 66 | 0 | 11 | 77 |
| [app/(chat)/api/chat/route.ts](/app/(chat)/api/chat/route.ts) | TypeScript | 243 | 0 | 23 | 266 |
| [app/(chat)/api/files/upload/route.ts](/app/(chat)/api/files/upload/route.ts) | TypeScript | 56 | 0 | 14 | 70 |
| [app/(chat)/api/history/route.ts](/app/(chat)/api/history/route.ts) | TypeScript | 10 | 0 | 4 | 14 |
| [app/(chat)/api/reservation/route.ts](/app/(chat)/api/reservation/route.ts) | TypeScript | 61 | 0 | 19 | 80 |
| [app/(chat)/chat/[id]/page.tsx](/app/(chat)/chat/%5Bid%5D/page.tsx) | TypeScript JSX | 95 | 1 | 18 | 114 |
| [app/(chat)/page.tsx](/app/(chat)/page.tsx) | TypeScript JSX | 6 | 0 | 2 | 8 |
| [app/globals.css](/app/globals.css) | CSS | 110 | 0 | 12 | 122 |
| [app/layout.tsx](/app/layout.tsx) | TypeScript JSX | 65 | 0 | 5 | 70 |
| [components.json](/components.json) | JSON | 20 | 0 | 1 | 21 |
| [components/custom/auth-form.tsx](/components/custom/auth-form.tsx) | TypeScript JSX | 48 | 0 | 6 | 54 |
| [components/custom/chat.tsx](/components/custom/chat.tsx) | TypeScript JSX | 66 | 0 | 10 | 76 |
| [components/custom/history.tsx](/components/custom/history.tsx) | TypeScript JSX | 220 | 0 | 22 | 242 |
| [components/custom/icons.tsx](/components/custom/icons.tsx) | TypeScript JSX | 672 | 0 | 33 | 705 |
| [components/custom/markdown.tsx](/components/custom/markdown.tsx) | TypeScript JSX | 75 | 0 | 4 | 79 |
| [components/custom/message.tsx](/components/custom/message.tsx) | TypeScript JSX | 107 | 0 | 9 | 116 |
| [components/custom/multimodal-input.tsx](/components/custom/multimodal-input.tsx) | TypeScript JSX | 229 | 11 | 28 | 268 |
| [components/custom/navbar.tsx](/components/custom/navbar.tsx) | TypeScript JSX | 78 | 0 | 7 | 85 |
| [components/custom/overview.tsx](/components/custom/overview.tsx) | TypeScript JSX | 48 | 0 | 3 | 51 |
| [components/custom/preview-attachment.tsx](/components/custom/preview-attachment.tsx) | TypeScript JSX | 37 | 2 | 6 | 45 |
| [components/custom/submit-button.tsx](/components/custom/submit-button.tsx) | TypeScript JSX | 24 | 0 | 6 | 30 |
| [components/custom/theme-provider.tsx](/components/custom/theme-provider.tsx) | TypeScript JSX | 7 | 0 | 3 | 10 |
| [components/custom/theme-toggle.tsx](/components/custom/theme-toggle.tsx) | TypeScript JSX | 23 | 0 | 6 | 29 |
| [components/custom/use-scroll-to-bottom.ts](/components/custom/use-scroll-to-bottom.ts) | TypeScript | 23 | 0 | 7 | 30 |
| [components/custom/weather.tsx](/components/custom/weather.tsx) | TypeScript JSX | 290 | 2 | 16 | 308 |
| [components/flights/authorize-payment.tsx](/components/flights/authorize-payment.tsx) | TypeScript JSX | 84 | 0 | 11 | 95 |
| [components/flights/boarding-pass.tsx](/components/flights/boarding-pass.tsx) | TypeScript JSX | 78 | 0 | 9 | 87 |
| [components/flights/create-reservation.tsx](/components/flights/create-reservation.tsx) | TypeScript JSX | 64 | 0 | 6 | 70 |
| [components/flights/flight-status.tsx](/components/flights/flight-status.tsx) | TypeScript JSX | 90 | 0 | 11 | 101 |
| [components/flights/list-flights.tsx](/components/flights/list-flights.tsx) | TypeScript JSX | 126 | 0 | 5 | 131 |
| [components/flights/select-seats.tsx](/components/flights/select-seats.tsx) | TypeScript JSX | 118 | 0 | 6 | 124 |
| [components/flights/verify-payment.tsx](/components/flights/verify-payment.tsx) | TypeScript JSX | 15 | 0 | 1 | 16 |
| [components/ui/alert-dialog.tsx](/components/ui/alert-dialog.tsx) | TypeScript JSX | 127 | 0 | 15 | 142 |
| [components/ui/button.tsx](/components/ui/button.tsx) | TypeScript JSX | 51 | 0 | 6 | 57 |
| [components/ui/dropdown-menu.tsx](/components/ui/dropdown-menu.tsx) | TypeScript JSX | 182 | 0 | 19 | 201 |
| [components/ui/input.tsx](/components/ui/input.tsx) | TypeScript JSX | 21 | 0 | 5 | 26 |
| [components/ui/label.tsx](/components/ui/label.tsx) | TypeScript JSX | 21 | 0 | 6 | 27 |
| [components/ui/sheet.tsx](/components/ui/sheet.tsx) | TypeScript JSX | 125 | 0 | 16 | 141 |
| [components/ui/textarea.tsx](/components/ui/textarea.tsx) | TypeScript JSX | 20 | 0 | 5 | 25 |
| [db/migrate.ts](/db/migrate.ts) | TypeScript | 25 | 0 | 8 | 33 |
| [db/queries.ts](/db/queries.ts) | TypeScript | 123 | 3 | 17 | 143 |
| [db/schema.ts](/db/schema.ts) | TypeScript | 37 | 1 | 7 | 45 |
| [drizzle.config.ts](/drizzle.config.ts) | TypeScript | 13 | 0 | 3 | 16 |
| [lib/drizzle/0000_absurd_joshua_kane.sql](/lib/drizzle/0000_absurd_joshua_kane.sql) | MS SQL | 28 | 4 | 1 | 33 |
| [lib/drizzle/meta/0000_snapshot.json](/lib/drizzle/meta/0000_snapshot.json) | JSON | 150 | 0 | 0 | 150 |
| [lib/drizzle/meta/_journal.json](/lib/drizzle/meta/_journal.json) | JSON | 13 | 0 | 0 | 13 |
| [lib/utils.ts](/lib/utils.ts) | TypeScript | 34 | 0 | 10 | 44 |
| [middleware.ts](/middleware.ts) | TypeScript | 6 | 0 | 4 | 10 |
| [next-env.d.ts](/next-env.d.ts) | TypeScript | 0 | 4 | 2 | 6 |
| [next.config.mjs](/next.config.mjs) | JavaScript | 7 | 1 | 2 | 10 |
| [package.json](/package.json) | JSON | 69 | 0 | 1 | 70 |
| [pnpm-lock.yaml](/pnpm-lock.yaml) | YAML | 5,775 | 0 | 1,434 | 7,209 |
| [postcss.config.mjs](/postcss.config.mjs) | JavaScript | 6 | 1 | 2 | 9 |
| [tailwind.config.ts](/tailwind.config.ts) | TypeScript | 67 | 0 | 2 | 69 |
| [tsconfig.json](/tsconfig.json) | JSON with Comments | 27 | 0 | 1 | 28 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)