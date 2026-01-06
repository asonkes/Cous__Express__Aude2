const categorieRouter = require("express").Router();

/** Donc ici c'est pour récupérer toutes les catégories */
categorieRouter.get("/", (req, res) => {
  /** Code 200, pour dire, tout s'est bien passé !!! */
  res.send("Voici toutes les catégories", 200);
});

/** Ici c'est pour récupérer l'id d'une catégorie en particulier */
categorieRouter.get("/:id", (req, res) => {
  //const id = req.params.id; ==> on peut directement le mettre dans les {}
  res.send(`Voici la catégorie qui a le numéro ${req.params.id}`, 200);
});

module.exports = categorieRouter;
