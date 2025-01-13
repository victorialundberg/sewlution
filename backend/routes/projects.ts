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

            res.json({
                project: projectData,
                material: materialData,
                todo: todoData,
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

    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query =
            "UPDATE project SET title = ?, description = ?, deadline = ?, link = ?, measurements = ? WHERE project_id = ?";
        let values = [
            title,
            description,
            deadline,
            link,
            measurements,
            project_id,
        ];

        connection.query<ResultSetHeader>(query, values, (err, data) => {
            if (err) console.log("Error", err);
            res.json({
                updatedProject: {
                    project_id,
                    title,
                    description,
                    deadline,
                    link,
                    measurements,
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
            res.json({ message: "deleted", project_id: project_id });
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
            res.json({ message: "deleted", project_id: project_id });
        });
    });
});

// Create materials

router.post("/add/materials", (req, res) => {
    let project_id = req.body.project_id;

    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query = "INSERT INTO material (project_id) VALUES (?)";

        let values = [project_id];

        connection.query<ResultSetHeader>(query, values, (err, data) => {
            if (err) console.log("Error", err);

            console.log("Materials table created", data);
            res.json(data);
        });
    });
});

// Read materials

// router.post("/read/materials", (req, res) => {
//     let project = {
//         project_id: req.body.project_id,
//     };

//     connection.connect((err) => {
//         if (err) console.log("Error: ", err);

//         let query = "SELECT * FROM material WHERE project_id = ?";
//         let values = project.project_id;

//         connection.query(query, values, (err, data) => {
//             if (err) console.log("Error", err);
//             res.json(data);
//         });
//     });
// });

// Update material

router.patch("/edit/materials", (req, res) => {
    let material_id = req.body.material_id;
    let material = req.body.material;
    let quantity = req.body.quantity;
    let unit = req.body.unit;
    let unit_price = req.body.unit_price;

    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query =
            "UPDATE material SET material = ?, quantity = ?, unit = ?, unit_price = ? WHERE material_id = ?";
        let values = [material, quantity, unit, unit_price, material_id];

        connection.query(query, values, (err, data) => {
            if (err) console.log("Error", err);
            res.json({
                updatedMaterials: {
                    material_id,
                    material,
                    quantity,
                    unit,
                    unit_price,
                },
            });
        });
    });
});

// Delete materials

router.delete("/delete/hard/material", (req, res) => {
    let material_id = req.body.material_id;

    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query = "DELETE FROM material WHERE material_id = ?";
        let values = [material_id];

        connection.query(query, values, (err, data) => {
            if (err) console.log("Error", err);
            res.json({ message: "deleted", material_id: material_id });
        });
    });
});

// Create todo

router.post("/add/todo", (req, res) => {
    let project_id = req.body.project_id;

    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query = "INSERT into todo (project_id) VALUES (?)";
        let values = [project_id];

        connection.query(query, values, (err, data) => {
            if (err) console.log("Error", err);

            console.log("Todo-list created", data);
            res.json(data);
        });
    });
});

// Read todo

// router.post("/read/todo", (req, res) => {
//     let project = {
//         project_id: req.body.project_id,
//     };

//     connection.connect((err) => {
//         if (err) console.log("Error: ", err);

//         let query = "SELECT * FROM todo WHERE project_id = ?";
//         let values = project.project_id;

//         connection.query(query, values, (err, data) => {
//             if (err) console.log("Error", err);
//             res.json(data);
//         });
//     });
// });

// Update todo

router.patch("/edit/todo", (req, res) => {
    let todo_id = req.body.todo_id;
    let todo = req.body.todo;
    let done = req.body.done;

    connection.connect((err) => {
        if (err) console.log("Error: ", err);

        let query = "UPDATE todo SET todo = ?, done = ? WHERE todo_id = ?";
        let values = [todo, done, todo_id];

        connection.query(query, values, (err, data) => {
            if (err) console.log("Error", err);
            res.json({
                updatedTodo: {
                    todo_id,
                    todo,
                    done,
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
            res.json({ message: "deleted", todo_id: todo_id });
        });
    });
});

export default router;
