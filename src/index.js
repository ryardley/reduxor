
import dotenv from 'dotenv';
import server from './server';
// load .env vars if they exist
dotenv.config({silent: true});

server();
