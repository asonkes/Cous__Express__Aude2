const { tasks } = require("./fakeDb");

const fakeTaskService = {
  // Récupère toutes les tâches de notre fausse DB
  find: () => {
    return tasks;
  },

  findById: (id) => {
    // Parfait tu t'en es rappellé
    // Ici tableau, donc on veut trouver l'élément qui a l'id que l'on recherche (rappel projet 'Memory')
    return tasks.find((task) => task.id === id);
  },
  create: (taskToAdd) => {
    // normalement ce sera automatique en db mais on va devoir lui calculer un id

    // explication idMax
    // chercher l'id max dans le tableau et faire +1
    // tasks.map(task => id)
    // transforme notre tableau d'objet en tableau d'id
    // |-> [{ id : 1, ...}, { id : 2... }] => [1, 2]

    // Math.max(2, 18, 7, 1) -> trouve la valeur max
    // Math.max(tasks.map(task => task.id)) => Math.max([1,2]) => Fail
    // On doit donc décomposer notre tableau avec les ...
    // Math.max(...tasks.map(task=> task.id)) => Math.max(... [1,2]) => Math.max(1,2)
    // #endregion
    const idMax = Math.max(...tasks.map((task) => task.id));

    taskToAdd.id = idMax + 1;
    /** on le fait en non effectué par défaut à la création */
    taskToAdd.isDone = false;

    tasks.push(taskToAdd);

    // On renvoie la nouvelle tâche
    return taskToAdd;
  },
};

module.exports = fakeTaskService;
