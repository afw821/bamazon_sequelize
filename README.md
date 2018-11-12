# Bamazon

Description (NOTE: STILL UNDER CONSTRUCTION!!)
This application simulates a basic online store front where a quantity of items can be selected and added to a cart. The user can checkout and the quantity of items will be updated where they are displayed on the simple front-end user interface as well as Jaws DB database. The user can easily navigate using the clearly marked navigation bar and buttons on each page

Back end
This application uses the runtime environment, Node.js for the server. The node .js framework, express.js, is used for the routing. This application has the root HTML route for the homepage and a GET and PUT API routes, which creates the RESTFUL API, allowing the inventory to be dynamically generate on the user interface. The promise based ORM Sequelize is used to manage the SQL Database using Javascript. This application is deployed to Heroku using Jaws DB MySql database.

Front end customer interface
The customer interface allows the user to view the current inventory of items, select a quantity of items, add it to their cart, and checkout. There is a dummy form on the checkout page only there for looks. The form doesn't connect to a database. A very simple bootstrap CDN was used, mainly for the sake of time. The main goal of this projects is the functionality of the site as opposed to the user interface. The UI isn't the most aesthetic at this time, but it's simple and easy to use. Most importantly the UI is Mobily responsive.

The site is a single page application. This is achieved using simple Javascript functions and JQuery methods adding and removing the class of hide from each "page". The JQuery ajax method was used to make GET and PUT requests from the RESTFUL API I created. The ajax GET request dynamically displays the product name, stock quantity and price to the page.

The ajax PUT request is still under construction but when completed it will dynamically subtract the stock quantity when the buyer checks out.

