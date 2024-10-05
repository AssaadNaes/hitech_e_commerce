-- Create the users table
CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(60) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Create the products table with image URL
CREATE TABLE products (
    product_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    image_url TEXT, -- URL to the image
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL
);

-- Create the carts table
CREATE TABLE carts (
    cart_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT REFERENCES users(user_id)
);

-- Create the cart_items table
CREATE TABLE cart_items (
    cart_item_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cart_id INT REFERENCES carts(cart_id),
    product_id INT REFERENCES products(product_id),
    quantity INT NOT NULL CHECK (quantity > 0)
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_user_id ON carts(user_id);
CREATE INDEX idx_cart_items_product_id ON cart_items(product_id);

-- Insert random data to the database
INSERT INTO users (username, email, password)
VALUES ('m.naes', 'm@gmail.com', 'mpassword'),
       ('n.martini', 'n@gmail.com', 'npassword'),
       ('a.naes', 'a@gmail.com', 'apassword'),
       ('r.naes', 'r@gmail.com', 'rpassword');

INSERT INTO products (name, image_url, description, price, stock_quantity)
VALUES ('NVIDIA GeForce RTX 4080 SUPER - 16GB',
        '../images/products/gpu.jpeg',
        'For Bitcoin mining and gaming GPU from NVIDIA',
        2500,
        150),
       ('Mouse + Keyboard + Mic + Headset',
        '../images/products/mouse-keyboard-mic-headset.jpeg',
        'Complete gaming kit from the most famous and best brands in the world',
        1250,
        250),
       ('MSI Motherboard',
        '../images/products/moi-motherboard.jpg',
        '3x HDMI, 15x USB, 2x USB-C, 64 Bus system',
        4000,
        50);

