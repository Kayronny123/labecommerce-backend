CREATE TABLE users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
);
INSERT INTO users (id, email, password)
VALUES
('01', 'kayronny@gmail.com', '12345'),
('02', 'lucas@gmail.com', '54321'),
('03', 'fulano@gmail.com', 'fulano12345');
DROP TABLE users;
CREATE TABLE products (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);
DROP TABLE products;
INSERT INTO products(id, name, price, category)
VALUES 
('001', 'Iphone500', 20000, 'Eletronics'),
('002', 'Asus Max Pro100', 15000, 'Eletronics'),
('003', 'Pendant', 5000, 'Acessories'),
('004', 'Bracelet', 8000, 'Acessores'),
('005', 'Notebook', 4000, 'Eletronics');
