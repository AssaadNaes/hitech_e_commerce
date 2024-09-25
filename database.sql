-- Create the users table
CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create the products table with image URL
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image_url VARCHAR(255), -- URL to the image
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

-- Create the carts table with product_id reference and constraints
CREATE TABLE carts (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    quantity_in_cart INTEGER NOT NULL CHECK (quantity_in_cart > 0),
    user_id VARCHAR(255) REFERENCES users(email)
);

-- Create an index on user_id in the carts table
CREATE INDEX idx_user_id ON carts(user_id);
