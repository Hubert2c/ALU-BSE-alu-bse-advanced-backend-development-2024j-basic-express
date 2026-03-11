const express = require("express");
const app = express();
const PORT = 3000;

// ─── Step 7: Middleware ───────────────────────────────────────────────────────
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] Incoming request: ${req.method} ${req.url}`);
  next();
});

// ─── Parse JSON bodies (required for POST routes) ────────────────────────────
app.use(express.json());

// ─── In-memory data ──────────────────────────────────────────────────────────
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

let courses = [
  { id: 1, title: "Intro to Programming", credits: 3 },
  { id: 2, title: "Web Development",      credits: 4 },
  { id: 3, title: "Database Systems",     credits: 3 },
];

// ─── Step 1: Root Route ───────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.send("Welcome to my Express server!");
});

// ─── Step 2: Additional Pages ─────────────────────────────────────────────────
app.get("/about", (req, res) => {
  res.send("About Page — This server was built as part of a Week 4 Express activity.");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page — Reach us at contact@example.com");
});

// ─── Step 3: Return Structured Data ──────────────────────────────────────────
app.get("/users", (req, res) => {
  res.json(users);
});

// ─── Step 4: Route Parameters ─────────────────────────────────────────────────
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: `No user found with ID ${id}` });
  }

  res.json(user);
});

// ─── Step 5: Query Parameters ─────────────────────────────────────────────────
app.get("/search", (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.status(400).json({ message: "Please provide a 'name' query parameter." });
  }

  res.json({ message: `You searched for: ${name}` });
});

// ─── Step 6: POST — Accept New User ──────────────────────────────────────────
app.post("/users", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: "Please provide both 'name' and 'age'." });
  }

  const newUser = { id: users.length + 1, name, age };
  users.push(newUser);

  res.status(201).json({
    message: "User received and added successfully!",
    user: newUser,
  });
});

// ─── Challenge: Courses API ───────────────────────────────────────────────────
app.get("/courses", (req, res) => {
  res.json(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return res.status(404).json({ message: `No course found with ID ${id}` });
  }

  res.json(course);
});

app.post("/courses", (req, res) => {
  const { title, credits } = req.body;

  if (!title || !credits) {
    return res.status(400).json({ message: "Please provide both 'title' and 'credits'." });
  }

  const newCourse = { id: courses.length + 1, title, credits };
  courses.push(newCourse);

  res.status(201).json({
    message: "Course added successfully!",
    course: newCourse,
  });
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
