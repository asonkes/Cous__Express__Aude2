// Bien respecter le nommage du fichier 'index.js'

// 1) Créer un 'routeur'(router)
const router = require("express").Router();
/** Ici on importe 'task.router' */
const taskRouter = require("./task.router");
/** Ici on importe 'categorie.router */
const categorieRouter = require("./categorie.router");

// TODO, les fonctions (req, res) => {} dégégeront plus tard pour aller dans les controllers, les fichiers de route ne doivent contenir que les méthodes des controllers à
// exécuter quand on rencontre telle ou telle route

// 2) On configure les routes
router.get("/", (req, res) => {
  // On renvoie juste un texte, donc pas de {}
  res.send("Bienvenue sur notre API de gestion de tâches", 200);
});

/** On utilise taskRouter */
router.use("/tasks", taskRouter);

/** On utilise categorieRouter */
/** /categories ==> on peut mettre 'pouet', c'est nous qui définissons le chemin */
/** C'est 'categorieRouter' qui prend le relai */
router.use("/categories", categorieRouter);

// 3) On rend notre objet router "exploitable"
module.exports = router;
