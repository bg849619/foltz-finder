CREATE TABLE IF NOT EXISTS messages (
    id integer PRIMARY KEY AUTOINCREMENT,
    author text NOT NULL,
    body text NOT NULL,
    created datetime DEFAULT CURRENT_TIMESTAMP
);

