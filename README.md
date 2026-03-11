# Week 4 — Extending Your Express Server

A fully extended Express.js server built as part of the Week 4 in-class activity.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed

### Installation

```bash
git clone <your-repo-url>
cd express-week4
npm install
```

### Running the Server

```bash
npm start
```

Server runs at `http://localhost:3000`

---

## API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Root welcome page |
| `/about` | GET | About page |
| `/contact` | GET | Contact page |
| `/users` | GET | Returns list of all users |
| `/users/:id` | GET | Returns a user by ID |
| `/search?name=value` | GET | Search by query parameter |
| `/users` | POST | Add a new user |
| `/courses` | GET | Returns list of all courses |
| `/courses/:id` | GET | Returns a course by ID |
| `/courses` | POST | Add a new course |

---

## Testing POST Routes

Use [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/).

### Add a User
```
POST http://localhost:3000/users
Content-Type: application/json

{
  "name": "Alice",
  "age": 24
}
```

### Add a Course
```
POST http://localhost:3000/courses
Content-Type: application/json

{
  "title": "Software Engineering",
  "credits": 4
}
```

---

## Features Implemented

- ✅ Multiple GET routes
- ✅ JSON response with structured data
- ✅ Route parameters (`/users/:id`)
- ✅ Query parameters (`/search?name=`)
- ✅ POST request handling with body parsing
- ✅ Global request logging middleware
- ✅ Challenge: Full Courses API (GET, GET by ID, POST)
