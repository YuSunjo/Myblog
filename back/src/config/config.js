import dotenv from 'dotenv';
dotenv.config();

export default {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'sj_blog',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'sj_blog',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'sj_blog',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
