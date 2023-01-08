# Project structure NestJs App
````sh
root
|
--/src
|
----/constants    Constant value and Enum
|
----/controllers  A controller is a class that handles incoming HTTP requests and returns HTTP responses.
|
----/dtos         DTOs are classes that are used to transfer data between the server and the client in a NestJS app.
|
----/entities     An entity is an object that represents a record in a database table or a document in a NoSQL database.
|
----/guards       A route guard is a class that implements the CanActivate interface from the @nestjs/common package and is used to protect routes and perform authentication and authorization tasks
|
----/interceptors An interceptor is a class that implements the Interceptor interface from the @nestjs/common package and is used to intercept incoming HTTP requests and outgoing HTTP responses to perform tasks such as logging or adding headers to responses.
|
----/interfaces   An interface is a class that defines a set of properties and methods that a class must implement.
|
----/modules      A module is a class that is decorated with the @Module() decorator from the @nestjs/common package and is used to organize the different components of your app (controllers, services, pipes, etc.) into logical units.
|
----/pipes        A pipe is a class that is decorated with the @Injectable() decorator and is used to transform the data of an HTTP request or response.
|
----/services     A service is a class that is decorated with the @Injectable() decorator and is used to encapsulate business logic and provide a set of related functions that can be used by one or more controllers.
|
----/shared       The shared folder is a good place to put utility functions, constants, and other pieces of code that are used in multiple parts of the app, but don't fit into any particular module.
|
----main.ts       The main.ts file typically imports the root module of the app (usually app.module.ts) and calls the createNestApplication() function from the @nestjs/core package to create the NestJS application.
|
--.env           This file config to development environment
|
--.env.staging      This file config to staging environment
|
--.env.prod      This file config to production environment
````
