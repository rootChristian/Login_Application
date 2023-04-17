# DOCKER COMMAND

### Backend dev

-   `docker build -f Dockerfile -t server .`
-   `docker run -it -p 4000:8000 server`

### Frontend dev

-   `docker build -f Dockerfile -t client .`
-   `docker run -it -p 4000:3000 client`

### Nginx dev

-   `docker build -f Dockerfile -t chagest .`
-   `docker run -it -p 80:80 chagest`

# DOCKER COMPOSE COMMAND

### Build and Run Application

-   `docker network create test`

-   `make build` OR `docker-compose up -d --build`
-   `make up` OR `docker-compose up -d`

-   `make down-v` OR `docker-compose down -v`

# CHAGEST PROJECT

`Chagest entreprise`

# `Backend dependencies`

### Initialize json package

-   `npm init`

### Install a dependencies

-   `npm i -s nodemon -D express express-rate-limit express-async-handler express-async-errors redis connect-redis express-session cookie-parser cors dotenv uuid date-fns jsonwebtoken crypto-js multer mongoose mongoose-sequence`

### links utils

-   https://www.npmjs.com/package/express-rate-limit
-   https://www.npmjs.com/package/mongoose-sequence
-   https://www.npmjs.com/package/date-fns
-   https://www.npmjs.com/package/dotenv
-   https://www.npmjs.com/package/uuid
-   https://www.npmjs.com/package/express-async-handler
-   https://www.npmjs.com/package/jsonwebtoken
-   https://www.npmjs.com/package/express-async-errors
-   https://www.npmjs.com/package/express-rate-limiter
-   https://www.npmjs.com/package/cors
-   https://www.npmjs.com/package/cookie-parser
-   https://www.npmjs.com/package/nodemon
-   https://www.npmjs.com/package/mongoose
-   https://www.npmjs.com/package/crypto-js
-   https://www.npmjs.com/package/multer

# `Frontend dependencies:`

# Getting Started with Create React App

-   `npx create-react-app`

## Install a dependencies

-   `npm i -s react-router-dom react-toastify styled-components react-hook-form react-icons react-loading-icons react-redux @reduxjs/toolkit`

## links utils

-   https://www.npmjs.com/package/react-icons

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
