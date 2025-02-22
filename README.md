Backend - Flickr Favorites App
This is the backend for the Flickr Favorites App, built  with Node.js, Express, and MongoDB Atlas. It connects to a MongoDB Atlas database to store and manage photo data, as well as handle operations like adding and removing favorites.

Features
-View Photos: Retrieve a list of all photos stored in the database.
-Favorite Photos: Add and remove photos from the user's favorites list.
    *Add to Favorites: Users can mark photos as their favorites.
    *Remove from Favorites: Users can unmark photos as favorites.
-MongoDB Atlas Integration: The backend uses MongoDB Atlas for cloud database storage.
-Simple API: The API provides basic functionality without authentication, focused on managing photo data.

Technologies Used
-Node.js: JavaScript runtime for building the backend server.
-Express: Web framework for Node.js, used to handle HTTP requests and routes.
-MongoDB Atlas: Cloud database service for storing and managing photo data.
-Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js, used to interact with the database.
-CORS: Middleware to enable Cross-Origin Resource Sharing, allowing the backend to interact with the frontend.
-Jest: JavaScript testing framework used for tests.

Installation and Setup
-Prerequisites: Node.js and npm installed, MongoDB Atlas account

Steps to run the application
1. Clone the repository using this link: https://github.com/mariaangelicaro/FlickrFavoritesAppBackend.git
2. Set up the necessary database and collections in the Clusters tab in MongoDb Atlas.
3. Go to Database Access and create a new database user.
4. In a Terminal navigate to the Demo directory using this line: cd DemoBackend.
5. Install Dependencies using this line: npm install.
6. Start the backend server using this line: npm start
