const taskController = require("../controllers/task.controller");

/** Exemple d'une autre façon d'écrire les 'routes' */
const taskRouter = require("express").Router();

taskRouter.route("/").get(taskController.getAll).post(taskController.insert);

taskRouter
  .route("/:id")
  .get(taskController.getById)

  /** Modification, on renvoie la chose qui a été créé ==> donc 200 */
  .put(taskController.update)
  .delete(taskController.delete)
  /** Ici, on veut changer 'isDone' */
  .patch(taskController.updateStatus);

/** Ca c'est pour trouver toutes les tâches d'un utilisateur */
taskRouter.get("/user/:name", (req, res) => {
  res.send(`Voici les tâches de ${req.params.name}`, 200);
});

module.exports = taskRouter;
