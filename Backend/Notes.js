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