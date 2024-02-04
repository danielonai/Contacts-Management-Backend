# Contacts Management App Server

How to use this server:

## Setup

```
npm install
```

```
create a .env file based on the .env.example and fill it with your database details
```
```
on terminal run npm start
```
## Seed DB
```
If you wish to use the seeder:
1. Go to config/config.json
2. Under "development" enter your credentials for the DB
3. Run the following commend: npx sequelize-cli db:seed:all
```
