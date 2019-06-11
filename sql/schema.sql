create table parks (
    id serial primary key,
    name varchar(200),
    address varchar(200),
    street varchar(200),
    city varchar(200),
    state varchar(50),
    picture varchar(500)    -- NEVER try to store images in your database
                            -- instead, store a URL  
    -- parks have many reviews
    -- but I don't put a foreign key here.
    -- That FK goes in the reviews table.
);

create table users (
    id serial primary key,
    first_name varchar(100),
    last_name varchar(100),  
    email varchar(200),
    password varchar(500)
);

create table reviews (
    id serial primary key,
    score integer,
    content text,
    park_id integer references parks(id),
    user_id integer references users(id)
);

