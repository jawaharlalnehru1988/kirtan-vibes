# 🪕 Kirtan Vibes — Full-Stack Monorepo

A complete full-stack web application and management system for **Kirtan Vibes by Sri Ganapathi Prabhu** (Sacred Vedic Acoustics, Handcrafted Mridangas & Kirtan Academy in Bengaluru).

---

## 📁 Monorepo Structure

```
kirtan-vibes/
├── frontend/                     # Next.js 16 (App Router, Tailwind CSS v4, TypeScript)
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx          # Home: Hand-Tuned Mridangas, Web Audio Resonator Preview
│   │   │   ├── instruments/      # Shop: Full Catalog & Interactive Detail Modal
│   │   │   ├── tutorials/        # Academy: 1-on-1 Masterclasses & Bangalore Workshop
│   │   │   ├── cart/             # Sacred Cart: Live State, Transit Review & WhatsApp Checkout
│   │   │   ├── about/            # About Sri Ganapathi Prabhu: 4 Sacred Pillars & Parampara
│   │   │   ├── layout.tsx        # Root Layout with Vedic Typography & Sacred Themes
│   │   │   └── globals.css       # Design System Tokens ("Vedic Sacred Elegance")
│   │   ├── components/
│   │   │   ├── Header.tsx        # Uncluttered Header + Slide-Over Hamburger Menu Drawer
│   │   │   └── Footer.tsx        # Detailed Vedic Footer + Floating WhatsApp Acharya Widget
│   │   └── context/
│   │       └── CartContext.tsx   # Global Shopping Cart State Provider
│   └── package.json
│
├── backend/                      # Django 6.1 (Django REST Framework, SQLite, CORS)
│   ├── kirtan_vibes_backend/     # Settings, URL routing, WSGI
│   ├── store/                    # Core Domain App
│   │   ├── models.py             # Category, Instrument, AcademyBooking, Order, OrderItem, WorkshopService
│   │   ├── admin.py              # Customized Sacred Django Admin Portal
│   │   ├── serializers.py        # REST Framework Serializers
│   │   ├── views.py              # REST Framework ViewSets with search & filters
│   │   └── urls.py               # API endpoints (/api/instruments/, /api/bookings/, etc.)
│   ├── seed_data.py              # Seeds initial instruments, categories & creates superuser
│   ├── requirements.txt          # Python dependencies
│   └── manage.py
│
├── package.json                  # Root Monorepo Scripts
└── README.md                     # Monorepo Documentation
```

---

## ⚡ Quick Start

### 1. Backend (Django)

From the root directory or inside `backend/`:

```powershell
cd D:\projects\kirtan-vibes\backend

# Activate virtual environment
.\venv\Scripts\Activate.ps1

# Run migrations (already applied)
python manage.py migrate

# Start the Django server
python manage.py runserver 8000
```

- **Django Admin Portal**: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)
  - **Username**: `admin`
  - **Password**: `admin123`
- **REST API Endpoints**:
  - `http://127.0.0.1:8000/api/instruments/` (Filter by `?category=...` or `?body_type=clay`)
  - `http://127.0.0.1:8000/api/categories/`
  - `http://127.0.0.1:8000/api/bookings/`
  - `http://127.0.0.1:8000/api/orders/`
  - `http://127.0.0.1:8000/api/workshop-services/`

---

### 2. Frontend (Next.js)

In a separate terminal:

```powershell
cd D:\projects\kirtan-vibes\frontend

# Start Next.js development server
npm run dev
```

- **Website URL**: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Root Monorepo Scripts

From the root `D:\projects\kirtan-vibes` directory:

| Command | Description |
| :--- | :--- |
| `npm run dev:frontend` | Starts the Next.js development server on port 3000 |
| `npm run build:frontend` | Creates an optimized production build of the frontend |
| `npm run lint:frontend` | Runs ESLint on frontend code |
| `npm run dev:backend` | Starts the Django development server on port 8000 |
| `npm run migrate:backend` | Applies Django database migrations |
| `npm run seed:backend` | Re-seeds initial instrument catalog and sample orders |

---

## 🎛️ Django Admin Features

The Django Admin has been customized for Sri Ganapathi Prabhu's operations:
1. **Instrument Catalog Management**:
   - Manage pricing, tuning scales (C#, D, D#), stock counts, and body types (Terracotta Clay vs. All-Weather Fiberglass).
   - In-line editable stock, featured flags, and pricing.
2. **Devotional Academy Bookings**:
   - Track devotee registrations for 1-on-1 Online Masterclasses and In-Studio Bangalore Workshops.
   - Update statuses (`Pending Acharya Review` ➜ `Confirmed & Slot Transmitted`).
3. **Sacred Orders & Transit Management**:
   - Devotee delivery details (Temple Ashram or Sanctum address).
   - WhatsApp audio/video proof verification status.
   - Wooden crate armor tracking number assignment.
4. **Workshop Repairs & Tuning**:
   - Dayan & Bayaan ghab replacement tracking, leather braiding restringing requests.
