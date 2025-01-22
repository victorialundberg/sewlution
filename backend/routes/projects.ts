import express from "express";
const router = express.Router();
import connection from "../lib/conn";
import { ResultSetHeader, RowDataPacket } from "mysql2";

// Create project

router.post("/add/project", (req, res) => {
    let title = req.body.title;
    let username = req.body.username;

    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query = "INSERT into project (title, username) VALUES (?, ?)";
        let values = [title, username];

        connection.query<ResultSetHeader>(query, values, (err, data) => {
            if (err) console.log("Error", err);

            console.log("Project created", data);
            res.json({ projectId: data.insertId });
        });
    });
});

// Read project - all

router.post("/read/all/projects", (req, res) => {
    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query = "SELECT * FROM project WHERE username = ? AND deleted = 0";
        let values = [req.body.username];

        connection.query(query, values, (err, data) => {
            if (err) console.log("Error", err);
            res.json(data);
        });
    });
});

// Read project - one

router.post("/read/project", (req, res) => {
    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let project_id = req.body.project;
        let username = req.body.username;

        let query = `
            SELECT * FROM project WHERE project_id = ? AND username = ?;
            SELECT * FROM material WHERE project_id = ?;
            SELECT * FROM todo WHERE project_id = ?;
            `;
        let values = [project_id, username, project_id, project_id];

        connection.query<RowDataPacket[]>(query, values, (err, data) => {
            if (err) console.log("Error", err);

            const [projectData, materialData, todoData] = data;

            if (projectData.length < 1) {
                return res
                    .status(404)
                    .json({ message: "No project with that id" });
            }

            console.log(projectData);

            res.json({
                projects: projectData,
                materials: materialData,
                todos: todoData,
            });
        });
    });
});

// read title

router.post("/read/title", (req, res) => {
    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let project_id = req.body.project_id;

        let query = "SELECT title FROM project WHERE project_id = ?";
        let values = [project_id];

        connection.query<RowDataPacket[]>(query, values, (err, data) => {
            if (err) console.log("Error", err);

            if (data.length < 1) {
                return res
                    .status(404)
                    .json({ message: "No title was found with that id" });
            }

            console.log(data[0]);

            res.json({ data: data[0] });
        });
    });
});

// Update title

router.patch("/edit/title", (req, res) => {
    let title = req.body.title;
    let project_id = req.body.project_id;
    connection.connect((err) => {
        if (!project_id) {
            return res.status(400).json({ error: "project_id is required" });
        }
        if (err) console.log("Error: ", err);

        let query = "UPDATE project SET title = ? WHERE project_id = ?";
        let values = [title, project_id];

        connection.query(query, values, (err, data) => {
            if (err) console.log("Error", err);
            res.json({
                data: {
                    updated: title,
                    success: true,
                },
            });
        });
    });
});

// read description

router.post("/read/description", (req, res) => {
    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let project_id = req.body.project_id;

        let query = "SELECT description FROM project WHERE project_id = ?";
        let values = [project_id];

        connection.query<RowDataPacket[]>(query, values, (err, data) => {
            if (err) console.log("Error", err);

            if (data.length < 1) {
                return res
                    .status(404)
                    .json({ message: "No description was found with that id" });
            }

            console.log(data[0]);

            res.json({ data: data[0] });
        });
    });
});

// Update description

router.patch("/edit/description", (req, res) => {
    let description = req.body.description;
    let project_id = req.body.project_id;
    connection.connect((err) => {
        if (!project_id) {
            return res
                .status(400)
                .json({ error: "project_id is are required" });
        }
        if (err) console.log("Error: ", err);

        let query = "UPDATE project SET description = ? WHERE project_id = ?";
        let values = [description, project_id];

        connection.query(query, values, (err, data) => {
            if (err) console.log("Error", err);
            res.json({
                data: {
                    updated: description,
                    success: true,
                },
            });
        });
    });
});

// read deadline

router.post("/read/deadline", (req, res) => {
    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let project_id = req.body.project_id;

        let query = "SELECT deadline FROM project WHERE project_id = ?";
        let values = [project_id];

        connection.query<RowDataPacket[]>(query, values, (err, data) => {
            if (err) console.log("Error", err);

            if (data.length < 1) {
                return res
                    .status(404)
                    .json({ message: "No deadline was found with that id" });
            }

            console.log(data[0]);

            res.json({ data: data[0] });
        });
    });
});

// Update deadline

router.patch("/edit/deadline", (req, res) => {
    let deadline = req.body.deadline;
    let project_id = req.body.project_id;
    console.log(deadline);

    connection.connect((err) => {
        if (!project_id) {
            return res
                .status(400)
                .json({ error: "project_id is are required" });
        }
        if (err) console.log("Error: ", err);

        let query = "UPDATE project SET deadline = ? WHERE project_id = ?";
        let values = [deadline, project_id];

        connection.query(query, values, (err, data) => {
            if (err) console.log("Error", err);
            res.json({
                data: {
                    updated: deadline,
                    success: true,
                },
            });
        });
    });
});

// read link

router.post("/read/link", (req, res) => {
    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let project_id = req.body.project_id;

        let query = "SELECT link FROM project WHERE project_id = ?";
        let values = [project_id];

        connection.query<RowDataPacket[]>(query, values, (err, data) => {
            if (err) console.log("Error", err);

            if (data.length < 1) {
                return res
                    .status(404)
                    .json({ message: "No link was found with that id" });
            }

            console.log(data[0]);

            res.json({ data: data[0] });
        });
    });
});

// Update link

router.patch("/edit/link", (req, res) => {
    let link = req.body.link;
    let project_id = req.body.project_id;
    connection.connect((err) => {
        if (!project_id) {
            return res.status(400).json({ error: "project_id is required" });
        }
        if (err) console.log("Error: ", err);

        let query = "UPDATE project SET link = ? WHERE project_id = ?";
        let values = [link, project_id];

        connection.query(query, values, (err, data) => {
            if (err) console.log("Error", err);
            res.json({
                data: {
                    updated: link,
                    success: true,
                },
            });
        });
    });
});

// read measurements

router.post("/read/measurements", (req, res) => {
    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let project_id = req.body.project_id;

        let query = "SELECT measurements FROM project WHERE project_id = ?";
        let values = [project_id];

        connection.query<RowDataPacket[]>(query, values, (err, data) => {
            if (err) console.log("Error", err);

            if (data.length < 1) {
                return res.status(404).json({
                    message: "No measurements were found with that id",
                });
            }

            console.log(data[0]);

            res.json({ data: data[0] });
        });
    });
});

// Update measurements

router.patch("/edit/measurements", (req, res) => {
    let measurements = req.body.measurements;
    let project_id = req.body.project_id;
    connection.connect((err) => {
        if (!project_id) {
            return res.status(400).json({ error: "project_id is required" });
        }
        if (err) console.log("Error: ", err);

        let query = "UPDATE project SET measurements = ? WHERE project_id = ?";
        let values = [measurements, project_id];

        connection.query(query, values, (err, data) => {
            if (err) console.log("Error", err);
            res.json({
                data: {
                    updated: measurements,
                    success: true,
                },
            });
        });
    });
});

// Update project

router.patch("/edit/project", (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let deadline = req.body.deadline;
    let link = req.body.link;
    let measurements = req.body.measurements;
    let project_id = req.body.project_id;
    let username = req.body.username;

    connection.connect((err) => {
        if (!username || !project_id) {
            return res
                .status(400)
                .json({ error: "project_id and username are required" });
        }
        if (err) console.log("Error: ", err);

        let query =
            "UPDATE project SET title = ?, description = ?, deadline = ?, link = ?, measurements = ? WHERE project_id = ? AND username = ?";
        let values = [
            title,
            description,
            deadline,
            link,
            measurements,
            project_id,
            username,
        ];

        connection.query(query, values, (err, data) => {
            if (err) console.log("Error", err);
            res.json({
                data: {
                    updatedProject: {
                        title,
                        description,
                        deadline,
                        link,
                        measurements,
                    },
                },
            });
        });
    });
});

// Delete project - soft

router.delete("/delete/soft/project", (req, res) => {
    let project_id = req.body.project_id;

    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query = "UPDATE project SET deleted = 1 WHERE project_id = ?";
        let values = [project_id];

        connection.query<ResultSetHeader>(query, values, (err, data) => {
            if (err) console.log("Error", err);
            res.json({ message: "deleted", id: project_id });
        });
    });
});

// Delete project - hard

router.delete("/delete/hard/project", (req, res) => {
    let project_id = req.body.project_id;

    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query = "DELETE FROM project WHERE project_id = ?";
        let values = [project_id];

        connection.query<ResultSetHeader>(query, values, (err, data) => {
            if (err) console.log("Error", err);
            res.json({ message: "deleted", id: project_id });
        });
    });
});

// Create material

router.post("/add/material", (req, res) => {
    let project_id = req.body.project_id;
    let material_row = req.body.material_row;

    connection.connect((err) => {
        if (!material_row) {
            return res.status(400).json({ Message: "No material provided" });
        }
        if (err) console.log("Error: ", err);

        const { material, quantity, unit, unit_price } = material_row;

        let query =
            "INSERT INTO material (material, quantity, unit, unit_price, project_id) VALUES (?, ?, ?, ?, ?)";

        let values = [material, quantity, unit, unit_price, project_id];
        connection.query<ResultSetHeader>(query, values, (err) => {
            if (err) console.log("Error", err);

            console.log("Materials added", material_row);
            res.json({
                data: {
                    addedMaterials: material_row,
                    success: true,
                },
            });
        });
    });
});

// Read materials

router.post("/read/material", (req, res) => {
    let project = {
        project_id: req.body.project_id,
    };

    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query = "SELECT * FROM material WHERE project_id = ?";
        let values = project.project_id;

        connection.query(query, values, (err, data) => {
            if (err) console.log("Error", err);
            console.log("all materials", data);

            res.json(data);
        });
    });
});

// Delete material

router.delete("/delete/hard/material", (req, res) => {
    let material_id = req.body.material_id;

    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query = "DELETE FROM material WHERE material_id = ?";
        let values = [material_id];

        connection.query(query, values, (err, data) => {
            if (err) console.log("Error", err);
            res.json({ message: "deleted", id: material_id, success: true });
        });
    });
});

// Create todo

router.post("/add/todo", (req, res) => {
    let project_id = req.body.project_id;
    let todo = req.body.todo;
    connection.connect((err) => {
        if (!todo) {
            return res.status(400).json({ Message: "No todo provided" });
        }
        if (err) console.log("Error: ", err);

        let query = "INSERT into todo (todo, project_id) VALUES (?, ?)";
        let values = [todo, project_id];

        connection.query(query, values, (err) => {
            if (err) console.log("Error", err);

            console.log("Todo added", todo);
            res.json({
                data: {
                    addedTodo: todo,
                },
            });
        });
    });
});

// Read todo

router.post("/read/todo", (req, res) => {
    let project = {
        project_id: req.body.project_id,
    };

    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query = "SELECT * FROM todo WHERE project_id = ?";
        let values = project.project_id;

        connection.query<RowDataPacket[]>(query, values, (err, data) => {
            if (err) console.log("Error", err);

            // if (data.length < 1) {
            //     return res
            //         .status(404)
            //         .json({ message: "No todo with that id" });
            // }
            res.json(data);
        });
    });
});

// Update todo

router.patch("/edit/todo", (req, res) => {
    let todo_id = req.body.todo.todo_id;
    let todo = req.body.todo.todo;
    let done = req.body.todo.done;

    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query = "UPDATE todo SET done = ? WHERE todo_id = ?";
        let values = [done, todo_id];

        connection.query(query, values, (err) => {
            if (err) console.log("Error", err);
            res.json({
                updatedTodo: {
                    todo_id,
                    todo,
                    done,
                    success: true,
                },
            });
        });
    });
});

// Delete todo

router.delete("/delete/hard/todo", (req, res) => {
    let todo_id = req.body.todo_id;

    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query = "DELETE FROM todo WHERE todo_id = ?";
        let values = [todo_id];

        connection.query(query, values, (err, data) => {
            if (err) console.log("Error", err);
            res.json({ message: "deleted", id: todo_id });
        });
    });
});

export default router;
