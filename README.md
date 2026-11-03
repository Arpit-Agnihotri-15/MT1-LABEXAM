# MT1-LABEXAM
## Employee Task Management Web Application

A Full Stack Development Lab Examination project built using Node.js and Express.js. This application demonstrates HTTP server creation, routing, file handling, REST API development and CRUD operations using JavaScript arrays.

## 1. Technologies Used

- **Node.js** – JavaScript runtime environment.
- **HTTP Module** – Creating an HTTP server.
- **FS Module** – Reading and serving HTML files.
- **Express.js** – Building REST APIs.
- **JavaScript (ES6)** – Application logic.
- **EchoAPI** – API testing.
- **Git & GitHub** – Version control and project submission.

## 2. Project Structure

```text
MT1-LABEXAM/
│
├── package.json
├── package-lock.json
├── .gitignore
│
├── httpServer.js
├── expressApp.js
│
├── public/
│   └── index.html
│
└── screenshots/
    ├── 01-http-server.png
    ├── 02-home-route.png
    ├── 03-get-tasks-http.png
    ├── 04-about-route.png
    ├── 05-fs-home-page.png
    ├── 06-post-add-task-http.png
    ├── 07-express-server.png
    ├── 08-get-all-tasks.png
    ├── 09-get-task-by-id.png
    ├── 10-post-add-task.png
    ├── 11-put-update-task.png
    ├── 12-delete-task.png
    ├── 13-missing-post-test.png
    ├── 14-github-repository.png
    └── 15-github-commit-history.png
```

## 3. Installation and Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/Arpit-Agnihotri-15/MT1-LABEXAM.git
```

### Step 2: Navigate to Project Directory

```bash
cd MT1-LABEXAM
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Run the HTTP Server

```bash
node httpServer.js
```

Server runs at:

`http://localhost:3000`

### Step 5: Run the Express Server

Open another terminal and execute:

```bash
node expressApp.js
```

Server runs at:

`http://localhost:4000`

## 4. Part A – HTTP Module and Server Creation

Implemented in `httpServer.js` using Node.js built-in HTTP and FS modules.

### Features

- HTTP server creation using `http.createServer()`.
- Routing using request URL and HTTP method.
- GET and POST request handling.
- Reading HTML files using `fs.readFile()`.
- JSON responses and error handling.

### Available Routes

| HTTP Method | Endpoint | Functionality |
|---|---|---|
| GET | `/` | Display welcome message |
| GET | `/tasks` | Retrieve all employee tasks |
| GET | `/about` | Display application information |
| GET | `/home` | Serve HTML page using FS module |
| POST | `/add-task` | Add a new employee task |

**Server Port:** 3000

## 5. Part B – Express.js REST API

Implemented in `expressApp.js` using Express.js.

### Employee Task Object

Each task contains:

```json
{
    "id": 1,
    "taskName": "Develop Login Page",
    "assignedTo": "Rahul Sharma",
    "status": "Pending",
    "priority": "High"
}
```

Three sample employee task records are initialized in a JavaScript array.

### CRUD Operations

| HTTP Method | Endpoint | Functionality |
|---|---|---|
| GET | `/tasks` | Retrieve all tasks |
| GET | `/tasks/:id` | Retrieve task by ID |
| POST | `/tasks` | Add a new task |
| PUT | `/tasks/:id` | Update existing task |
| DELETE | `/tasks/:id` | Delete a task |

**Server Port:** 4000

### Additional Features

- JSON parsing using `express.json()`.
- Route parameter handling using `req.params`.
- Request body handling using `req.body`.
- Appropriate HTTP status codes.
- Validation of required task fields.
- Handling missing tasks and invalid routes.
- Maintaining updated records in a JavaScript array.

## 6. API Testing Using EchoAPI

The REST API endpoints are tested using EchoAPI.

The following operations are tested:

1. GET – Retrieve all employee tasks.
2. GET – Retrieve an individual task by ID.
3. POST – Create a new employee task.
4. PUT – Update an existing employee task.
5. DELETE – Remove an employee task.

Additional testing includes invalid routes, missing task records and incomplete request bodies.

## 7. Error Handling and HTTP Status Codes

| Status Code | Description |
|---|---|
| 200 | Request successful |
| 201 | Task created successfully |
| 400 | Invalid request or missing fields |
| 404 | Route or task not found |
| 409 | Duplicate task ID |
| 500 | Internal file-reading error |

## 8. Important Notes

- No database is used in this project.
- Employee task records are maintained using JavaScript arrays.
- Both applications run independently.
- The HTTP server uses only built-in HTTP and FS modules.
- Express.js is used for the REST API implementation.
- Data is stored in memory and resets when the respective server restarts.

## 9. Author

**Arpit Agnihotri**

GitHub: [Arpit-Agnihotri-15](https://github.com/Arpit-Agnihotri-15)

**Repository:** [MT1-LABEXAM](https://github.com/Arpit-Agnihotri-15/MT1-LABEXAM)

---

*Developed as part of the Full Stack Development – Node.js Lab Examination.*