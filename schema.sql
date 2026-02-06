-- USERS
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT CHECK (role IN ('user','host','admin')) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- EXPERIENCES
CREATE TABLE experiences (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  price INTEGER NOT NULL,
  created_by INTEGER REFERENCES users(id),
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT NOW()
);

-- BOOKINGS
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  experience_id INTEGER REFERENCES experiences(id),
  user_id INTEGER REFERENCES users(id),
  seats INTEGER CHECK (seats >= 1),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE (experience_id, user_id)
);
