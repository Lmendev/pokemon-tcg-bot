CREATE DATABASE pokemontcgbot
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

CREATE TABLE public.data (
    userid text NOT NULL,
    data json NOT NULL,
    PRIMARY KEY (userid)
);

ALTER TABLE public.data
    OWNER to postgres;
