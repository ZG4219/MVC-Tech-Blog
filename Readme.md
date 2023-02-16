# MVC Tech Blog
MVC Tech Blog is a content management system (CMS) that allows users to create, view, and interact with blog posts. The application follows the Model-View-Controller (MVC) paradigm, with the frontend built using the Handlebars.js library and the backend using Node.js and Express.js. The application uses a MySQL database and the Sequelize ORM to manage data.

## Getting Started

### Prerequisites
- To run this application, you will need Node.js, MySQL, and a package manager such as npm or yarn installed on your computer.

## Installation
- Clone the repository to your local machine.
- Run `npm install` to install the required dependencies.
- Create a `.env` file with your MySQL credentials and session secret.
- Run `npm run seed` to seed the database with sample data.
- Run `npm start` to start the server.

## Usage
Once the server is running, you can visit the application in your browser at http://localhost:3001.

### Creating a User Account
To create a user account, click the "Sign Up" button in the navigation bar and fill out the form with your desired username and password. Once you submit the form, you will be redirected to the homepage and logged in.

### Creating a Blog Post
To create a blog post, click the "Dashboard" button in the navigation bar and click the "New Post" button. Fill out the form with the title and content of your post, then click the "Create Post" button to publish it to the website.

### Commenting on a Blog Post
To comment on a blog post, navigate to the post page by clicking on the post title in the homepage or dashboard. Scroll to the bottom of the page and fill out the comment form with your desired comment. Once you submit the form, your comment will be added to the post.

### Editing or Deleting a Blog Post
To edit or delete a blog post, navigate to the post page by clicking on the post title in the homepage or dashboard. If you are the author of the post, you will see buttons to edit or delete the post. Click the appropriate button and follow the prompts to make your changes.

## Deployment
To deploy the application, you will need to host it on a server such as Heroku or AWS. You will also need to set up a MySQL database on your server and update your environment variables accordingly.

## Built With
- Node.js
- Express.js
- Handlebars.js
- MySQL
- Sequelize
- dotenv
- bcrypt
- express-session
- connect-session-sequelize

## License
This project is licensed under the MIT License.

## Acknowledgments
This project was built as part of a coding bootcamp, and was inspired by the curriculum and class materials.

## Future Work
Some features that could be added to this project in the future include:

- User profile pages
- Social media sharing and integration
- Improved mobile responsiveness
- More advanced comment and post moderation tools

## Link

- Github:
- Heroku:
