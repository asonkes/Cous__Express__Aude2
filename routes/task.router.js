const taskRouter = require("express").Router();

taskRouter
  .route("/")
  .get((req, res) => {
    res.send({ message: "Voici toutes les tâches" }, 200);
  })
  .post((req, res) => {
    const taskToInsert = req.body;
    res.send(taskToInsert, 201);
  });

taskRouter
  .route("/:id")
  .get((req, res) => {
    const id = req.params.id;
    res.send(`Voici la tâche numéro ${id}`);
  })

  /** Modification, on renvoie la chose qui a été créé ==> donc 200 */
  .put((req, res) => {
    const taskId = req.params.id;
    const taskUpdated = req.body;

    taskUpdated.id = taskId;
    // TODO, ici il y aura la modification
    res.send(taskUpdated, 200);
  })
  .delete((req, res) => {
    // res.send(a utiliser qd on veut renvoyer une donnée + un statut)
    // res.sendStatus (on utilise qd on veut supprimer une donnée)
    res.sendStatus(204); // 204 - No Content - Succès mais rien de particulier à renvoyer
  })
  /** Ici, on veut changer 'isDone' */
  .patch((req, res) => {
    /**
     * const updatedTask = [
     *  id: req.params.id,
     *  isDone: req.body.isDone
     * ]
     *
     * ==> on peut écrire comme ça aussi :)
     */
    res.send({ id: req.params.id, isDone: req.body.isDone }, 200);
  });

/** Ca c'ets pour trouver toutes les tâches d'un utilisateur */
taskRouter.get("/user/:name", (req, res) => {
  res.send(`Voici les tâches de ${req.params.name}`, 200);
});

module.exports = taskRouter;
