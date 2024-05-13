## Swift Find

This project is an E-commerce webapp to sell high quality, high end headsets.

### Client

The client-side of the project is built using Next.js, a popular React framework. The client-side code is located in the `Client` directory.

**Features:**

- **Components:** The `src/components` directory contains reusable React components.\
- **Utilities:** The `src/utils` directory contains utility functions that are used throughout the project.\
- **Styling:** The project uses Tailwind CSS for styling, as indicated by the `tailwind.config.ts` file.\
- **TypeScript:** The project is written in TypeScript, providing static type checking.\
- **ESLint:** The project uses ESLint for linting, as indicated by the `.eslintrc.json` file.\
- **Next.js Configuration:** The `next.config.mjs` file contains the configuration for Next.js.

### Server

The server-side of the project is located in the `Server` directory.

**Features:**

- **Environment Variables:** The `.env` file contains environment variables for the server.\
- **TypeScript:** The server-side code is also written in TypeScript.\
- **Package Management:** The `package.json` file contains the list of server-side dependencies and scripts.

**Please refer to the individual files and directories for more detailed information.**

## TODO

**Server:**

- [x] Implement the database using SQL or NoSQL\
- [x] Fetch data from the database\
- [x] Implement Auth using Passport with the server using OAuth\
- [x] Add keys to the `.env` file\
- [x] On Passport callback, save the user to the DB with relevant data\
- [x] send the display name and image url to the front end to display them\
- [x] Implement sessions using cookies and Passport\
- [x] Update the maxAge of the cookie before production\
- [x] Implement payment using Stripe API\
- [x] Embed the product's data in processing the payment\
- [x] process the cart's data to extract an array of price data and quantity and send it to stripe\
- [x] Add the price to the Headset Object in the cms\
- [x] Save the Order ID to the database attached to the user ID\
- [] Fix Bugs\
- [] Switch the test api key for a production one for stripe\
- [] Set the NODE_ENV variable to production before deploying environment

**Client:**

- [x] Fetch data from the backend and show it at the homepage\
- [x] Create dynamic route for each product that displays the image and description\
- [x] Make all the routes need authentication\
- [x] Add a logout button that clears out the cookies\
- [x] modify the sanity schema
- [x] Make a shopping cart page\
- [x] Implement adding products to cart\
- [x] Allow user to delete products from the cart\
- [x] Add quantity counter\
- [x] Send the cart's data to the server\
- [x] Add nav bar to the shopping cart page\
- [x] Show the prices at the `/products` page\
- [x] Calculate the total at the shopping cart page and display it\
- [x] Save the cart's data in local storage\
- [x] Add a location for the order

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
