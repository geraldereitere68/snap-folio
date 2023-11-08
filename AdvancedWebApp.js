/*Filename: AdvancedWebApp.js
Content: A sophisticated web application that utilizes advanced JavaScript concepts and techniques.*/

// Global variables
let users = [];
let loggedInUser = null;

// User Class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.loggedIn = false;
    this.friends = [];
  }

  login() {
    this.loggedIn = true;
    loggedInUser = this;
    console.log(`${this.name} logged in.`);
  }

  logout() {
    this.loggedIn = false;
    loggedInUser = null;
    console.log(`${this.name} logged out.`);
  }

  addFriend(user) {
    this.friends.push(user);
    console.log(`${user.name} added as a friend.`);
  }
}

// Function to create a new user
function createUser(name, email) {
  const newUser = new User(name, email);
  users.push(newUser);
  console.log(`New user ${name} created with email ${email}`);
}

// Function to display all users
function displayUsers() {
  console.log("Users:");
  users.forEach(user => {
    console.log(`- ${user.name} (${user.email})`);
  });
}

// Creating some users
createUser("John Doe", "john@example.com");
createUser("Jane Smith", "jane@example.com");
createUser("David Johnson", "david@example.com");

// Login as John Doe
users[0].login();

// Add Jane Smith as John's friend
users[0].addFriend(users[1]);

// Display all users
displayUsers();

// Class representing a Blog Post
class BlogPost {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
    console.log(`New comment added by ${comment.author}: ${comment.content}`);
  }
}

// Creating a blog post
const blogPost = new BlogPost("Advanced JavaScript", "This is an example of an advanced JavaScript application.", loggedInUser);

// Adding comments to the blog post
blogPost.addComment({ author: "Jane Smith", content: "Great article!" });
blogPost.addComment({ author: "David Johnson", content: "Very helpful. Thanks!" });

// Logout
loggedInUser.logout();