const taskRouter = require("express").Router();

taskRouter.get("/", (req, res) => {
  res.send("Voici toutes les tâches", 200);
});

taskRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Voici la tâche numéro ${id}`);
});

taskRouter.post("/", (req, res) => {
  res.send("Tâche ajoutée avec succès", 200);
});

module.exports = taskRouter;
