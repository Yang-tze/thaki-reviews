\c reviews_db;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(250),
  img VARCHAR(250)
);

\COPY users FROM 'review-database/data/users1.data.csv' WITH (FORMAT CSV);
\COPY users FROM 'review-database/data/users2.data.csv' WITH (FORMAT CSV);
\COPY users FROM 'review-database/data/users3.data.csv' WITH (FORMAT CSV);

ALTER SEQUENCE users_id_seq RESTART WITH 10000001;

DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  date VARCHAR(250),
  user_id SERIAL,
  product_id INT NOT NULL,
  rating INT NOT NULL,
  title VARCHAR(250),
  verified BOOL,
  review VARCHAR(8000)
);

\COPY reviews FROM 'review-database/data/reviews1.data.csv' WITH (FORMAT CSV);
\COPY reviews FROM 'review-database/data/reviews2.data.csv' WITH (FORMAT CSV);
\COPY reviews FROM 'review-database/data/reviews3.data.csv' WITH (FORMAT CSV);

ALTER SEQUENCE reviews_id_seq RESTART WITH 25106441;

DROP TABLE IF EXISTS aggregates;
CREATE TABLE aggregates (
id SERIAL PRIMARY KEY,
product_name VARCHAR(250),
five INT,
four INT,
three INT,
two INT,
one INT
);

\COPY aggregates FROM 'review-database/data/aggregates1.data.csv' WITH (FORMAT CSV);

ALTER SEQUENCE aggregates_id_seq RESTART WITH 10000002;

ALTER TABLE reviews ADD FOREIGN KEY (user_id) REFERENCES users(id);
