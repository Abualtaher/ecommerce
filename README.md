# All You Need - E-Commerce Application

## Overview

All You Need is a full-stack e-commerce application developed as an independent degree project.

The application includes:

- User registration and login
- JWT authentication
- Product catalog
- Shopping cart
- Coupon system
- Stripe payment integration
- Admin dashboard
- Product management
- Sales analytics
- Cloudinary image uploads
- Redis caching and token management

## Technologies

### Frontend

- React
- Vite
- React Router
- Zustand
- Axios
- Recharts
- Framer Motion

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Redis (Upstash)
- Stripe
- Cloudinary

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd ecommerce-app
```

Install backend dependencies:

```bash
npm install
```

Install frontend dependencies:

```bash
npm install --prefix frontend
```

## Environment Variables

Create a `.env` file in the root directory using `.env.example` as a template.

Required variables:

```env
PORT=
MONGO_URI=

UPSTASH_REDIS_URL=

ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=

STRIPE_SECRET_KEY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

CLIENT_URL=
NODE_ENV=
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:3000
```

The frontend will run on:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

## Project Structure

```text
ecommerce-app/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   └── public/
│
├── .env.example
├── package.json
└── README.md
```

## Features

### Customer Features

- Create account
- Login/logout
- Browse products
- Shopping cart
- Apply coupons
- Stripe checkout
- Order creation

### Admin Features

- Create products
- Delete products
- Feature products
- View sales statistics
- Monitor revenue and orders

## Author

Wisam Al-Taher

Degree Project – Frontend Development
