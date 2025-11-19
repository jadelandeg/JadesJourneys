CREATE TABLE journeys (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL FOREIGN KEY REFERENCES users(id),
  title VARCHAR(100) NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE, 
  colour VARCHAR(100) DEFAULT 'RED' ,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE journal_entries (
  id SERIAL PRIMARY KEY,
  journey_id INTEGER NOT NULL FOREIGN KEY REFERENCES journeys(id),
  date DATE NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  photos TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TYPE marker AS (
  lat DOUBLE PRECISION,
  lon DOUBLE PRECISION
);

CREATE TABLE route (
    id SERIAL PRIMARY KEY,
    journey_id INTEGER NOT NULL FOREIGN KEY references journeys(id),
    title VARCHAR(100) NOT NULL,
     markers marker[]
)