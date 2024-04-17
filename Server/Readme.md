Project Documentation
This project is divided into two main parts: the Client and the Server.

Client
The client-side of the project is built using Next.js, a popular React framework. The client-side code is located in the Client directory.

Features
Components: The src/components directory contains reusable React components.
Utilities: The src/utils directory contains utility functions that are used throughout the project.
Styling: The project uses Tailwind CSS for styling, as indicated by the tailwind.config.ts file.
TypeScript: The project is written in TypeScript, providing static type checking.
ESLint: The project uses ESLint for linting, as indicated by the .eslintrc.json file.
Next.js Configuration: The next.config.mjs file contains the configuration for Next.js.

Server
The server-side of the project is located in the Server directory.

Features
Environment Variables: The .env file contains environment variables for the server.
TypeScript: The server-side code is also written in TypeScript.
Package Management: The package.json file contains the list of server-side dependencies and scripts.
Please refer to the individual files and directories for more detailed information.

TODO:

##Server:
    - [x] Implement the database using no sql or sql
    - [x] Fetch data from the database
    - [x] Implement Auth using passport with the server using OAuth
    - [] create a dynamic route for every product/user
    - [] add keys to the dotenv

##Client
    - [] fetch the data from the backend and show it at the home page
    - [] Create dynamic route for each product that displays the image and description
    - [] Make a shopping cart page
    - [] Implement adding products to cart
    - [] user can delete products from the cart
    - [] Implement payment using stripe api
    - [] add a user form so they leave a review on the website after purchasing
