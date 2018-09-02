# SERVER
cd ./server
NODE_ENV="" npm install
npm run build

cd ..

# WEBAPP
cd ./webapp
NODE_ENV="" npm install
npm run build:prod

cd ..

# DB
cd ./server

npm run migrate:up

cd ..
