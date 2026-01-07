const categorieController = require("../controllers/categorie.controller");

const categorieRouter = require("express").Router();

/** On veut aller chercher toute sles catégories */
categorieRouter
  .route("/")
  .get(categorieController.getAll)
  .post(categorieController.insert);

/** On veut aller chercher une catégorie précise */
categorieRouter
  .route("/:id")
  .get(categorieController.getById)
  .put(categorieController.update)
  .delete(categorieController.delete);

/** Avait oublié de le mettre donc il n'était pas importé ==> donc fonctionnait pas */
module.exports = categorieRouter;
