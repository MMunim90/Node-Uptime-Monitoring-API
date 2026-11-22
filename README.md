# 🚀 Uptime Monitoring API

A RESTful API built with **Raw Node.js** that allows users to monitor the uptime and downtime of their own websites or web links.

Users can create an account, authenticate securely, manage their monitoring links, and check whether their registered websites are up or down.

## ✨ Features

- **User Management**
  - Create a new user account
  - Edit user information

- **Authentication & Authorization**
  - Token-based authentication
  - Secure user authentication
  - Logout mechanism

- **Link Management**
  - Add custom URLs for monitoring
  - Set monitoring links as Up or Down
  - Edit existing monitoring links
  - Delete monitoring links

- **Uptime Monitoring**
  - Check website availability
  - Monitor website uptime and downtime
  - Rate limiting for monitoring requests

## 🛠️ Built With

- Node.js
- JavaScript
- RESTful API
- Token-Based Authentication

## 📋 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## ⚙️ Installation & Setup

**1. Clone the repository**

```bash
git clone <your-repository-url>
```

**2. Navigate to the project directory**

```bash
cd <project-folder>
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the server**

```bash
node index.js
```

For development with Nodemon:

```bash
npx nodemon index.js
```

## 📡 API Overview

The API provides functionality for:

| Module | Operations |
|---|---|
| Users | Create, Read, Update, Delete |
| Authentication | Login, Token Authentication, Logout |
| Monitoring Links | Create, Read, Update, Delete |
| Uptime Monitoring | Check Up/Down Status |
| Rate Limiting | Control Monitoring Requests |

*Refer to the source code for the available API endpoints and request formats.*

## 🎯 Project Goals

The main goal of this project is to understand and implement backend development concepts using native Node.js.

Through this project, I am exploring:

- Building RESTful APIs with Raw Node.js
- Handling HTTP requests and responses
- Managing user authentication with tokens
- Implementing CRUD operations
- Managing website monitoring services
- Understanding uptime and downtime monitoring
- Implementing rate-limiting mechanisms

---
