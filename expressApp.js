// Import Express
import express from "express";

// Create Express application
const app = express();

// B1: JSON parsing middleware
app.use(express.json());

// Initialize employee tasks array
let tasks = [
    {
        id: 1,
        taskName: "Develop Login Page",
        assignedTo: "Rahul Sharma",
        status: "Pending",
        priority: "High"
    },
    {
        id: 2,
        taskName: "Create Dashboard",
        assignedTo: "Amit Kumar",
        status: "Completed",
        priority: "Medium"
    },
    {
        id: 3,
        taskName: "Test Application",
        assignedTo: "Priya Singh",
        status: "Pending",
        priority: "Low"
    }
];

// B2: GET all tasks
app.get("/tasks", (req, res) => {

    res.status(200).json(tasks);

});

// B2: GET task by ID
app.get("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.status(200).json(task);

});

// B2: POST add new task
app.post("/tasks", (req, res) => {

    const { id, taskName, assignedTo, status, priority } = req.body;

    // Validate required fields
    if (
        !Number.isInteger(id) ||
        !taskName?.trim() ||
        !assignedTo?.trim() ||
        !status?.trim() ||
        !priority?.trim()
    ) {
        return res.status(400).json({
            message: "All task fields are required"
        });
    }

    // Check duplicate ID
    if (tasks.some(t => t.id === id)) {
        return res.status(409).json({
            message: "Task ID already exists"
        });
    }

    // Create new task
    const newTask = {
        id,
        taskName,
        assignedTo,
        status,
        priority
    };

    // Add task to array
    tasks.push(newTask);

    res.status(201).json({
        message: "Task added successfully",
        task: newTask
    });

});

// B2: PUT update task
app.put("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    const { taskName, assignedTo, status, priority } = req.body;

    // Validate update data
    if (
        !taskName?.trim() ||
        !assignedTo?.trim() ||
        !status?.trim() ||
        !priority?.trim()
    ) {
        return res.status(400).json({
            message: "All task fields are required"
        });
    }

    // Update existing task
    task.taskName = taskName;
    task.assignedTo = assignedTo;
    task.status = status;
    task.priority = priority;

    res.status(200).json({
        message: "Task updated successfully",
        task: task
    });

});

// B2: DELETE task
app.delete("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    // Delete task from array
    const deletedTask = tasks.splice(index, 1);

    res.status(200).json({
        message: "Task deleted successfully",
        task: deletedTask[0]
    });

});

// Handle invalid JSON requests
app.use((err, req, res, next) => {

    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({
            message: "Invalid JSON request"
        });
    }

    next(err);

});

// Handle invalid routes
app.use((req, res) => {

    res.status(404).json({
        message: "Route not found"
    });

});

// B1: Start Express server on port 4000
app.listen(4000, () => {

    console.log(
        "Express Server running at http://localhost:4000"
    );

});