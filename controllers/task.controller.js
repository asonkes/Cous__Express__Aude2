// import du type Request et response pour la JSDoc
const { request, Response } = require("express");

const fakeTaskService = require("../services/fake/fakeTask.service");

// On va faire autant de fois des 'fonctions' qu'il y a de tâches
const taskController = {
  /**
   * Récupérer toutes les tâches
   * @param {Request} req
   * @param {Response} res
   */
  getAll: (req, res) => {
    const tasks = fakeTaskService.find();

    // version1
    // Ca va chercher le tableau des tâches sous forme de json
    res.status(200).json(tasks);

    // version2 - renvoyer un objet avec le total des tâches + le tableau
    // Se fait qd on a beaucoup de données
    /*
    const dataToSend = {
      count: tasks.length,
      /* tasks: tasks, ==> peut-être écrit // tasks
    };

    res.status(200).json(dataToSend);
    */
  },

  getById: (req, res) => {
    // Ici l'id est renvoyé sous forme de chaine de caractère
    // On peut écrire : const id = +req.params.id
    const id = parseInt(req.params.id);
    const task = fakeTaskService.findById(id);

    /** Si pas de tâche récupérée (don si l'id n'existe pas) */
    /** On renvoie une erreur 404 */
    /** Pas de 'else' car if(!task) ==> on a le message d'erreur mais SEND met fin à la requête */
    if (!task) {
      res.status(404).json({ statusCode: 404, message: "Tâche non trouvée" });
    }

    res.status(200).json(task);
  },

  getByUser: (req, res) => {
    res.sendStatus(501);
  },

  insert: (req, res) => {
    /** Body ==> il contient 'tasks' (les éléments dont ont a besoin) qu'il convertit sous forme de json */
    const taskToAdd = req.body;
    const addedTask = fakeTaskService.create(taskToAdd);

    // Pour respecter les principes REST, on doit rajouter à la réponse, une url qui permet
    // de consulter la valeur ajoutée
    res.location(`/api/tasks/${addedTask.id}`);
    res.status(201).json(addedTask);
  },

  update: (req, res) => {
    res.sendStatus(501);
  },

  updateStatus: (req, res) => {
    res.sendStatus(501);
  },

  delete: (req, res) => {
    res.sendStatus(501);
  },
};

// On le rend importable en l'exportant
module.exports = taskController;
