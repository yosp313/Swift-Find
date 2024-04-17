## Swift Find

This project is divided into two main parts: the Client and the Server.

### Client

The client-side of the project is built using Next.js, a popular React framework. The client-side code is located in the `Client` directory.

**Features:**

* **Components:** The `src/components` directory contains reusable React components.\
* **Utilities:** The `src/utils` directory contains utility functions that are used throughout the project.\
* **Styling:** The project uses Tailwind CSS for styling, as indicated by the `tailwind.config.ts` file.\
* **TypeScript:** The project is written in TypeScript, providing static type checking.\
* **ESLint:** The project uses ESLint for linting, as indicated by the `.eslintrc.json` file.\
* **Next.js Configuration:** The `next.config.mjs` file contains the configuration for Next.js.

### Server

The server-side of the project is located in the `Server` directory.

**Features:**

* **Environment Variables:** The `.env` file contains environment variables for the server.\
* **TypeScript:** The server-side code is also written in TypeScript.\
* **Package Management:** The `package.json` file contains the list of server-side dependencies and scripts.

**Please refer to the individual files and directories for more detailed information.**

## TODO

**Server:**

* [x] Implement the database using SQL or NoSQL\
* [x] Fetch data from the database\
* [x] Implement Auth using Passport with the server using OAuth\
* [x] Add keys to the `.env` file\
* [] Create a dynamic route for every product/user\
* [] On Passport callback, save the user to the DB with relevant data\
* [] Implement sessions using cookies and Passport

**Client:**

* [] Fetch data from the backend and show it at the homepage\
* [] Create dynamic route for each product that displays the image and description\
* [] Make a shopping cart page\
* [] Implement adding products to cart\
* [] Allow user to delete products from the cart\
* [] Implement payment using Stripe API\
* [] Add a user form to leave a review on the website after purchasing
