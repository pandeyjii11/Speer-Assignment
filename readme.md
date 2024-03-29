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

The app is hosted on [Render](https://render.com/) and the base url is <https://speer-assignment.onrender.com>

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
    PORT = 4000
    DATABASE_URL = **Your MongoDB URL**
    jwt_secret = **Auth-Key**
   ```

create and update the .env file with your specific configuration details.

## Usage

### Running the Server

start the server:

   ```bash
   npm run start
   ```

   or if you are in development mode, use this

   ```bash
   npm run dev
   ```

### API Endpoints

Document the available API endpoints, their methods, and expected responses. For example:

- POST /api/auth/signup: signup and create account
- POST /api/auth/login: login and authenticate user
- GET /api/notes: Get all the notes of the authenticated user
- GET /api/notes/:id: Get note by id for the authenticated user
- POST /api/notes: Create a new note for the authenticated user
- PUT /api/notes/:id: update an existing note for the authenticated user
- DELETE /api/notes/:id: Delete note for the authenticated user
- POST /api/notes/:id/share: Share the note with another user
- GET /api/search?q=:query: Seacrh the notes based on keywords using text indexing


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

- **Developer Name**: Nitish Pandey
- **Email**: <nitish15cse@gmail.com>
- **LinkedIn**: [Nitish Pandey](https://www.linkedin.com/in/nitish-pandey-474442201/)

Feel free to open an issue on the repository for bug reports, feature requests, or general feedback. Pull requests are also welcome!

Thank you for your interest and support in this project! 🚀