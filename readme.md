# ConnectaCFP API

> Backend API 

# Node.js with MongoDB and Docker

Backend API for a community platform project

### Starting the Application with Docker Containers:

1. Install Docker.

2. Open a command prompt.

3. Run the commands listed in `node.dockerfile` (see the comments at the top of the file).

4. Navigate to http://localhost:5000 or use Postman/Insomia to connect with the api.


### Starting the Application with Docker Compose

1. Install Docker.

2. Open a command prompt at the root of the application's folder.

3. Run `docker-compose build`

4. Run `docker-compose up`

5. Open another command prompt and run `docker ps -a` and note the ID of the Node container

6. Run `docker exec -it <nodeContainerID> sh` (replace <nodeContainerID> with the proper ID) to sh into the container

7. Run `node seeder.js` to seed the MongoDB database

8. Type `exit` to leave the sh session

9. Navigate to http://localhost:5000 or use Postman/Insomia.

10. Run `docker-compose down` to stop the containers and remove them.


## To run the app with Node.js and MongoDB (without Docker):

1. Register in https://account.mongodb.com 

2. Install the LTS version of Node.js (http://nodejs.org).

If you want to install the latest version of NodeJS in Ubuntu, please see the following steps:

$ curl -s https://deb.nodesource.com/setup_16.x | sudo bash
$ sudo apt install nodejs -y
$ node -v
$ curl -L https://npmjs.org/install.sh | sudo sh
$ npm -v

3. Open `config/config.env.env` and adjust the values/setting to your own. Rename "config/config.env.env" to "config/config.env".

4. Install Dependencies. Run `npm install`.

5. Run `node seeder.js` to get the sample data loaded into MongoDB. Exit the command prompt.

6. Run App

Run `npm run dev` to start the server in dev mode.

Run `npm start` to start the server in prod mode.

7. Navigate to http://localhost:5000 or use Postman/Insomia.

- Version: 1.0.0
- License: MIT