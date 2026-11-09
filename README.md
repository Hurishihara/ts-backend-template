# ts-backend-template

Framework-agnostic TypeScript backend starter. Bring your own framework and database.

## Scaffold a new project

```bash
npx tiged <your-github-user>/ts-backend-template my-api
cd my-api
npm install
```

## Scripts

| Script                                      | What it does                                                      |
| ------------------------------------------- | ----------------------------------------------------------------- |
| `npm run dev`                               | Run `src/index.ts` with watch mode (tsx), loads `.env` if present |
| `npm run build`                             | Compile to `dist/`                                                |
| `npm start`                                 | Run the compiled build                                            |
| `npm run typecheck`                         | Type-check without emitting                                       |
| `npm run lint` / `lint:fix`                 | ESLint (typescript-eslint, strict + type-checked)                 |
| `npm run format` / `format:check`           | Prettier                                                          |
| `npm test` / `test:watch` / `test:coverage` | Jest (ts-jest, ESM)                                               |
| `npm run check`                             | Typecheck + lint + format check + tests (what CI runs)            |

## Included

- TypeScript (strict, ESM, `NodeNext`)
- ESLint flat config + typescript-eslint + Prettier compatibility
- Prettier, EditorConfig, `.gitattributes` (LF line endings)
- Jest (ts-jest, native ESM)
- tsx for dev
- GitHub Actions CI
- VS Code settings and recommended extensions

## One-command scaffold (optional)

Add to `~/.bashrc` (Git Bash):

```bash
newapi() {
  [ -z "$1" ] && { echo "usage: newapi <name>"; return 1; }
  npx tiged <your-github-user>/ts-backend-template "$1" &&
  cd "$1" &&
  sed -i "s/\"name\": \"ts-backend-template\"/\"name\": \"$1\"/" package.json &&
  cp .env.example .env &&
  git init -b main &&
  npm install &&
  git add -A &&
  git commit -m "chore: scaffold from ts-backend-template"
}
```

Or PowerShell (`notepad $PROFILE`):

```powershell
function newapi([string]$Name) {
  if (-not $Name) { Write-Host "usage: newapi <name>"; return }
  npx tiged <your-github-user>/ts-backend-template $Name; if (-not $?) { return }
  Set-Location $Name
  (Get-Content package.json -Raw) -replace '"name": "ts-backend-template"', "`"name`": `"$Name`"" | Set-Content package.json -NoNewline
  Copy-Item .env.example .env
  git init -b main; npm install; git add -A; git commit -m "chore: scaffold from ts-backend-template"
}
```
