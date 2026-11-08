-- Jalankan di database pertemuan_10 (pgAdmin → Query Tool)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'user'
);

INSERT INTO users (nama, email, password, role) VALUES
    ('Admin',  'admin@gmail.com',  'admin123',  'admin'),
    ('Editor', 'editor@gmail.com', 'editor123', 'editor');

-- Cek hasil (harus 2 baris)
SELECT * FROM users;
