// Import built-in HTTP and FS modules
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Employee tasks array
let tasks = [
    {
        id: 1,
        taskName: "Develop Login Page",
        assignedTo: "Rahul Sharma",
        status: "Pending"
    },
    {
        id: 2,
        taskName: "Create Dashboard",
        assignedTo: "Amit Kumar",
        status: "Completed"
    },
    {
        id: 3,
        taskName: "Test Application",
        assignedTo: "Priya Singh",
        status: "Pending"
    }
];

// Create HTTP server
const server = http.createServer((req, res) => {

    // Function to send JSON response
    const sendJSON = (statusCode, data) => {
        res.writeHead(statusCode, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(data));
    };

    // A2: Welcome route
    if (req.url === "/" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <h1>Welcome to Employee Task Management</h1>
            <p>Manage employee tasks easily.</p>
        `);
    }

    // A2 and A3: GET all tasks
    else if (req.url === "/tasks" && req.method === "GET") {

        sendJSON(200, tasks);
    }

    // A2: About route
    else if (req.url === "/about" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end(
            "Employee Task Management Application using Node.js HTTP Module."
        );
    }

    // A4: Serve HTML using FS module
    else if (req.url === "/home" && req.method === "GET") {

        const filePath = path.join(
            __dirname,
            "public",
            "index.html"
        );

        fs.readFile(filePath, "utf8", (err, data) => {

            if (err) {
                sendJSON(500, {
                    message: "Error reading HTML file"
                });

                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end(data);
        });
    }

    // A3: POST add new task
    else if (req.url === "/add-task" && req.method === "POST") {

        let body = "";

        // Receive request data
        req.on("data", chunk => {
            body += chunk;
        });

        // Process request data
        req.on("end", () => {

            try {

                const newTask = JSON.parse(body);

                const { id, taskName, assignedTo, status } = newTask;

                // Validate required fields
                if (
                    id === undefined ||
                    !taskName?.trim() ||
                    !assignedTo?.trim() ||
                    !status?.trim()
                ) {

                    sendJSON(400, {
                        message: "All required fields are mandatory"
                    });

                    return;
                }

                // Check duplicate ID
                if (tasks.some(task => task.id === id)) {

                    sendJSON(409, {
                        message: "Task ID already exists"
                    });

                    return;
                }

                // Add task to array
                tasks.push(newTask);

                sendJSON(201, {
                    message: "Task added successfully",
                    task: newTask
                });

            } catch (error) {

                sendJSON(400, {
                    message: "Invalid JSON request"
                });
            }
        });
    }

    // A5: Handle invalid routes
    else {

        sendJSON(404, {
            message: "Route not found"
        });
    }

});

// A1: Start HTTP server on port 3000
server.listen(3000, () => {

    console.log(
        "HTTP Server running at http://localhost:3000"
    );

});