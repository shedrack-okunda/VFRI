# Victoria Falls Regional Institute — Website

> **Reimagining Africa Through Dialogue**
> Full-stack website built with React + Tailwind CSS (frontend) and Supabase (backend).

---

## Project Structure

```
vfri/
├── client/                  # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/      # Navbar, Hero, About, Values, Focus, Services, Team, Achievements, Contact, Footer
│   │   ├── data/            # content.js  ← all site text lives here
│   │   ├── hooks/           # useReveal.js (scroll animations)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css        # Tailwind directives + custom classes
│   ├── tailwind.config.js   # VFRI brand colors & fonts

```

---

## Quick Start

### 1. Install all dependencies
```bash
npm run install:all
```

### 2. Configure environment
```bash
cp server/.env.example server/.env
# Edit server/.env with your SMTP credentials if you want email forwarding
```

### 3. Run in development (both servers)
```bash
npm run dev
```

- **Frontend**: http://localhost:5173
- **API health**: http://localhost:5000/api/health

The Vite dev server proxies `/api/*` requests to Express automatically.

---

## API Endpoints

| Method | Route          | Description              |
|--------|----------------|--------------------------|
| GET    | `/api/health`  | Health check             |
| POST   | `/api/contact` | Submit contact form      |

### POST `/api/contact` — Request body
```json
{
  "firstName":    "Jane",
  "lastName":     "Doe",
  "email":        "jane@example.com",
  "organisation": "UN Development Programme",
  "enquiryType":  "Research Collaboration",
  "message":      "We would like to explore a joint research programme..."
}
```

---

## Brand Colors (Tailwind)

| Token              | Hex       | Usage                   |
|--------------------|-----------|-------------------------|
| `green-deep`       | `#0f3d25` | Backgrounds, nav        |
| `green-dark`       | `#1a6640` | Primary brand green     |
| `gold`             | `#c8a84b` | Accents, labels, CTA    |
| `gold-light`       | `#e2c96a` | Hover states            |
| `rust`             | `#7a2e1e` | Kente pattern accent    |
| `cream`            | `#f5f0e8` | Light section bg        |

---

## Updating Content

All site text is in **`client/src/data/content.js`** — edit `VALUES`, `FOCUS_AREAS`, `SERVICES`, `TEAM`, `ACHIEVEMENTS`, and `CONTACT` to update any copy without touching components.

---

## Production Build

```bash
npm run build          # Builds client to client/dist/
# Then serve client/dist/ as static files from Express (or a CDN)
```

To serve the built frontend from Express, add to `server/index.js`:
```js
import { fileURLToPath } from 'url'
import path from 'path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(__dirname, '../client/dist')))
app.get('*', (_, res) => res.sendFile(path.join(__dirname, '../client/dist/index.html')))
```

---

## Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React 18, Vite, Tailwind CSS v3   |
| Routing   | React Router DOM (ready to add)   |
| HTTP      | Axios                             |
| Backend   | Node.js, Express 4                |
| Validation| express-validator                 |
| Email     | Nodemailer (configured via .env)  |
| Fonts     | Cormorant Garamond + Outfit (Google Fonts) |
