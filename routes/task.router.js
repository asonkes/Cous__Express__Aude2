const taskRouter = require("express").Router();

taskRouter.get("/", (req, res) => {
  res.send("Voici toutes les tâches", 200);
});

taskRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Voici la tâche numéro ${id}`);
});

/** La preuve c'est que c'ets une tâche créé ==> donc 201 ==> created */
taskRouter.post("/", (req, res) => {
  const taskToInsert = req.body;
  res.send(taskToInsert, 201);
});

/** Modification, on renvoie la chose qui a été créé ==> donc 200 */
taskRouter.put("/:id", (req, res) => {
  const taskId = req.params.id;
  const taskUpdated = req.body;

  taskUpdated.id = taskId;
  // TODO, ici il y aura la modification
  res.send(taskUpdated, 200);
});

taskRouter.delete("/:id", (req, res) => {
  // res.send(a utiliser qd on veut renvoyer une donnée + un statut)
  // res.sendStatus (on utilise qd on veut supprimer une donnée)
  res.sendStatus(204); // 204 - No Content - Succès mais rien de particulier à renvoyer
});

module.exports = taskRouter;
