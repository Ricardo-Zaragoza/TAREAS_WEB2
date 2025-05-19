CREATE DATABASE node_crud CHARACTER SET latin1 COLLATE latin1_spanish_ci;

USE node_crud;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

INSERT INTO users (name, email) VALUES
('Aaron', 'aaron@gmail.com'),
('Emanuel', 'emanuel@gmail.com');
