# CMS - Credits management system

## Repository Description

This repository contains the Credit Management System (CMS) API. The API is designed to perform CRUD (Create, Read, Update, Delete) operations on an educational institution's extracurricular credit management. It serves as the core of the data management within the system, providing the necessary endpoints to interact with the database and maintain the integrity of the information.

## Project Description 

The Credit Management System (CMS) is a broader project composed of this API and another component called "react-c-management-system", which is responsible for the user interface and data synchronization, among other functions. Together, these two repositories form a complete application that allows to monitor and manage more efficiently the recording of credits by each student during their extracurricular activities, avoiding as much as possible the loss of information and facilitating an efficient management through an intuitive user interface and a solid backend infrastructure.

[Repository of "react-c-management-system": ](https://github.com/GlzLXochitl/react-c-management-system.git)

## Dependencies

The project uses the following dependencies:

- `body-parser`: Middleware to parse incoming request bodies in a middleware.
- `cors`: Middleware to enable Cross-Origin Resource Sharing (CORS) for cross-domain requests.
- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `mariadb`: Client to interact with MariaDB databases.
- `nodemon`: Utility that monitors for changes in source code and automatically restarts the server.
- `sequelize`: Promise-based ORM for Node.js that supports multiple databases.
- `swagger-jsdoc`: Generates API documentation using JSDoc comments in your code.
- `swagger-ui-express`: Serves auto-generated Swagger UI from your API documentation.


## Installation

Follow these steps to set up and run the project in your local environment:

1. Clone the repository:

   ```sh
   git clone https://github.com/GlzLXochitl/api-c-management-system.git
   cd api-c-management-system
   ```

2. Installs the project dependencies:

   ```sh
   npm install
   ```

3. Configure the database:

   - Create a database in MariaDB.
   - Update the `models/db.js` file with your database credentials.

   ```javascript

   const sequelize = new Sequelize(
     "nombre_base_datos",
     "usuario",
     "contraseña",
     {
        dialect: "mariadb",
        host: "localhost",
     }
   );

   ```

4. Start the server in development mode:

   ```sh
   npm run dev
   ```

   This will start the server using `nodemon`, which will automatically restart the application when changes to the files are detected.

## Use

Once the server is up and running, you can access the application at `http://localhost:3001` (or whatever port you have configured).
