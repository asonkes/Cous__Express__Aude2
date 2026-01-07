const categoryRouter = require("express").Router();

/** On veut aller chercher toute sles catégories */
categoryRouter.get("/", (req, res) => {
  res.send("Bienvenue sur la page des catégories", 200);
});

/** On veut aller chercher une catégorie précise */
categoryRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Bienvenue sur la page de la catégorie ${id}`, 200);
});

/** On veut poster/ajouter une catégorie */
categoryRouter.post("/", (req, res) => {
  const categoryToInsert = req.body;
  res.send(categoryToInsert, 201);
});

/** On veut modifier une catégorie */
categoryRouter.put("/:id", (req, res) => {
  const categoryId = req.params.id;
  const categoryUpdated = req.body;

  categoryUpdated.id = categoryId;

  res.send(categoryUpdated, 200);
});

/** On veut supprimer une catégorie */
categoryRouter.delete("/:id", (req, res) => {
  res.sendStatus(204);
});

module.exports = categoryRouter;
