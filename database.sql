-- Create the users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY
    email VARCHAR(60),
    name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create the products table with image URL
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    image_url TEXT, -- URL to the image
    description TEXT,
    price DECIMAL(10, 2) NOT NULL
);

-- Create the carts table with product_id reference and constraints
CREATE TABLE carts (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    quantity_in_cart INTEGER NOT NULL CHECK (quantity_in_cart > 0),
    user_id SERIAL REFERENCES users(email)
);

-- Create an index on user_id in the carts table
CREATE INDEX idx_user_id ON carts(user_id);
