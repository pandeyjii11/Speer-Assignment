# Speer Assignment

A brief description of your Node.js backend project.

## Table of Contents

- [Getting Started](#getting-started)
  - [Hosting](#hosting)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [Running the Server](#running-the-server)
  - [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Contact the Developer](#contact-the-developer)

## Getting Started

### Hosting

The app is hosted on [Cyclic](https://www.cyclic.sh/) and the base url is <https://ill-ruby-stingray-kit.cyclic.app>

### Prerequisites

These are the prerequisites that need to be installed before setting up the project.

- [Node.js](https://nodejs.org/) (version X.X.X)
- [npm](https://www.npmjs.com/) (version X.X.X)
- [MongoDB](https://www.mongodb.com/) (version X.X.X) - If applicable

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. install dependencies:

   ```bash
   cd your-project
   npm install
   ```

### Configuration

1. Copy the sample configuration and configure it:

   ```bash
   PORT=8000
   JWT_SECRET=auth-key
   ```

create and update the .env file with your specific configuration details.

## Usage

### Running the Server

start the server:

   ```bash
   npm start
   ```

   or if you are in development mode, use this

   ```bash
   npm dev
   ```

### API Endpoints

Document the available API endpoints, their methods, and expected responses. For example:

- POST /api/v0.1/login: login and authenticate user
- POST /api/v0.1/register: register or create a new user
- GET /api/v0.1/posts: Get all the posts
- GET /api/v0.1/todos: Get all the todos
- GET /api/v0.1/posts/comments: Get all the comments of a post
- GET /api/v0.1/users: Get all the users

All the data is dummy and coming from [JSONPlaceHolder API](https://jsonplaceholder.typicode.com/)

## Contributing

**Note:** If you want to contribute to the project please make sure you first use and test the app by following the steps mentioned in [Usage](#usage). Then follow the below steps:

1. **Create new issue**: Create a new issue for the project. Tag me and get yourself attached to the issue.

2. **Fix the Issue**: Fix the changes in your local system. Make the needed changes in the code (Don't mess the code. Maintain the architecture and quality of the project).

    a. **Clone the Repository**: Clone the repository to your local machine. Replace `<your-username>` with your actual GitHub username.

    ```bash
    git clone https://github.com/<your-username>/expense-tracker-app.git
    ```

    b. **Create a Branch**: Create a new branch for your contribution. Use a descriptive branch name that reflects the nature of your changes.

    ```bash
    git checkout -b <your-name>/feature/fix-issue-<issue-number>
    ```

    c. **Make Changes**: Implement the changes or additions needed to fix the issue. Ensure that your code follows the project's coding standards and guidelines.

    d. **Commit Changes**: Commit your changes with a clear and concise commit message.

    ```bash
    git add .
    git commit -m "Fix issue #<issue-number>: Describe the fix"
    ```

3. **Push the changes**: Push the changes first to your forked repo.

    ```bash
    git push origin <your-name>/feature/fix-issue-<issue-number>
    ```

4. **Raise PR**: Raise a pull request to my repo to merge the commits made by you. (Write the description of the PR properly. Make sure to mention the issue number in the description of the pr.)

**Thank you for contributing to our project! 🚀**

## Contact the Developer

If you have any questions, suggestions, or just want to say hello, feel free to contact the developer:

- **Developer Name**: Subrata Rajak
- **Email**: <subratarajak956@gmail.com>
- **LinkedIn**: [Subrata Rajak](https://www.linkedin.com/in/subrata-connect/)

Feel free to open an issue on the repository for bug reports, feature requests, or general feedback. Pull requests are also welcome!

Thank you for your interest and support in this project! 🚀