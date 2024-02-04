
## API Restful with NodeJS

Project Structure:

`config` - configurations for external libraries, such as authentication, upload, email, etc.

`modules` - cover the knowledge areas of the application, directly related to business rules. Initially we will create the following modules in the application: customers, products, orders and users.

`shared` - general purpose modules shared with more than one module of the application, such as the server.ts file, the main route file, database connection, etc.

`services` - will be inside each module of the application and will be responsible for all the rules that the application needs to meet, such as:

    The password must be stored with encryption;
    There cannot be more than one product with the same name;
    The same email cannot be used by more than one user;

