# shop-task-backend

A full-stack application developed as a technical test task. The project includes a backend built with NestJS and Prisma, and a frontend built with Vue 2 and Vuex.

---

## 🛠 Tech Stack

- Node.js
- NestJS
- PostgreSQL
- Prisma
- Vue 2
- Vuex

---

## 🚀 Installation

### 📦 Backend

```bash
cd backend
yarn install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=3000
DATABASE_URL="postgresql://<username>:<password>@<host>:5432/shop-task"
```

Replace `<username>`, `<password>`, and `<host>` with your actual database credentials.

---

### ⚙️ Prisma Setup

Generate the Prisma client:

```bash
npx prisma generate
```

Run seed scripts (populate categories and products):

```bash
yarn seed
```

Start the backend development server:

```bash
yarn start:dev
```

---

### 🔍 Optional: Prisma Studio (visual interface for database)

```bash
yarn prisma studio
```

---

### 💻 Frontend

Create a `.env` file in the `shop/` directory:

```env
VUE_APP_API_URL=http://localhost:5000
```

Install dependencies and run the frontend:

```bash
cd shop
yarn
yarn serve
```

---

## 🧑‍💻 Author

Serhii Nesmiianov — [t.me/atom1css](https://t.me/atom1css)
