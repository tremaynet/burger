# Eat-da-Burger

## About the App

This is a Node.js/Express/MySQL app using a custom ORM that allows the user to input the name of a burger which is then stored in a mySQL database.  The just added burger will be added to the list of burgers to eat.  The user can then select a burger to devour by clicking the Devour it button, and the burger will be moved to list of devoured burgers.

## Usage

1. Type `npm install` in the command line in order to retrieve all the dependencies

2. Create a database and table in MySQL Workbench using the schema provided or go to the db folder using Bash and type 
`mysql -u root -p` to open the MySQL command line.

3. Within the MySQL command line, enter the command `source schema.sql`

4. Use the seeds.sql file in order to fill the table with data either within MySQL workbench or within the MySQL command line type `source seeds.sql`.

5. Within the connection.js file, add your MySQL password in order to connect to the database

![Cow](/public/assets/img/evil-cows-went-to-burger-king.jpg)