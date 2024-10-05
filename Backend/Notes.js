/*
first we init npm then enter till and then we installed below packages
npm i cors -- allow fontend IP to access backend
dotenv  -- environment variables in project
express -- backend framework  (for creating APIs)
mongoose -- database    
bcrypt -- password hashing  (forencryp the password so that we can store into database )
jsonwebtoken -- token generation (enable the user authentication so that user can loged in our websiteS)
razorpay -- payment gateway (online paymenet integration)
stripe -- payment gateway (online paymenet integration)
cloudinary -- image hosting 
multer -- image upload  (store the images on cloudinary storage)
nodemon -- automatic restart (restart the backend whenever we make changes in the code)
validator -- input validation
*/

/*
Then we created all the folder which are neccessary for backend
Then we have added the  "server": "nodemon server.js" for running the backed when we run
And, We have "type": "module", in package.json file so that we can use import and export in js file
*/

/*
for creating our server,  we created the server.js file in Backend folder
Then we have added the below code in server.js file
then we added env file
*/

/*
To run the server, we have to run the below command
npm run server

We have added the Types folder adding express and cros
When we connecting the database that time we shoud Make sure we give our own created password over here
If our password contaains special character then we have to use URL encoder like %40 and all in place of characters
*/

/*
Then we have created the cloudinary API key and get name and all and put it into env
And Create the coudnity file for configration of cloudinary
Then we have created the product, from using this we can store the data in DataBace
*/

/*
We have created the product model and user model
Then we have created the product route and user route
Then we have created the product controller and user controller
And then passed it to api endpoints in server
 */


// ********************************* What is relation among UserController, UserRoute, UserModel, ApiCheckpoint ****************

/* 
1.UserModel: This is like the blueprint for user data in your application. It defines how user information is structured and connects directly to your MongoDB database, making it easy to store and retrieve user data efficiently.
2.UserController: Think of this as the brain behind user-related actions. It takes the data defined in the UserModel and handles the core logic for things like creating new users, updating existing profiles, and retrieving user information based on requests.
3.UserRoute: This component serves as the traffic director for API requests. It sets up the routes that clients will use to interact with the application and maps those requests to the appropriate methods in the UserController. So when a user wants to perform an action, this is where the request goes first.
4.ApiCheckpoint: Imagine this as the security guard for your routes. It checks incoming requests to make sure users are authorized to access the information or perform the actions they’re requesting. Only after passing this checkpoint does the request move on to the UserController, ensuring that sensitive user data is kept secure.

*/

// *******************************    What is hashing of password ********************************************
/*
1.Transforming Passwords: Hashing converts a plaintext password into a fixed-size string, ensuring it is not stored in its original form.
2.Irreversibility: Hashing is a one-way process, making it virtually impossible to retrieve the original password from the hashed value.
3.Salt: A random value added to the password before hashing to prevent attacks using precomputed hash tables, enhancing security.
4.Storing Passwords Securely: Hashed passwords are stored in the database instead of plaintext passwords, protecting user credentials even if the database is compromised.
*/


// ********************************** What is middle ware *********************************************************
/*
Middleware is like a helper that sits between two parts of a computer program to help them talk to each other. Imagine you're sending a message through a mail service. The mail carrier (middleware) picks up your message, checks if everything is okay, and delivers it to the right place. It also makes sure that any response you get back is handled properly.

In other words, Middleware is a software component that sits between a user's request and the server, helping to process and manage that request before it reaches the main application or database. It can perform various tasks, such as checking user permissions, logging activities, handling file uploads, and validating data. If the request meets the specified criteria, the middleware allows it to proceed to the next step in the process; if there are issues, it can stop the request and provide feedback. This ensures that the application runs smoothly and securely.
*/
/*
So, here multer is middleware which used in website for, when a user uploads data (like files), Multer acts as middleware that checks the data before it is sent to the server or stored in the database. If the uploaded data is valid and meets the specified criteria (like file type or size), Multer allows it to proceed to the next step (like saving it to the server or database). If there are issues, it can stop the process and provide feedback.
 */

// Method for storing the products into the database
/*
// Login of product
// function for add product
// to add the product use middle ware multer

 // req.body refers to an object that contains the data sent by the client 
        // it is in-build in express

// to get image from file
        // TODO: images showing undefiend excpet from one image

// We need to store this data and images into the database
// but in the data base we can not able to store the image 
// So first we need to upload these images on the cloudinary 
// from cloudinary we got the url and then we can store our data into the data base
// if anything undefined in array then remove it

// Now we should Store into the database
// all the data comes in string from cloudinary
// This below code should match the format of the product model

// before adding this to data bace lets do console log


*/