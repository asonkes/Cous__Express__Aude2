// ! 1) Importer express
const express = require("express"); // Import de la lib express
const server = express(); // Création du serveur express

// ? Récupération des variables d'environnement:
const { PORT } = process.env;

// Pour pouvoir recevoir du json
server.use(express.json());

// ! 2) Traiter les requêtes
// Indiquer à notre app que le routing se trouve dans le dossier "routes"
const router = require("./routes"); // Import de l'objet routeur présent dans index.js

// use => utiliser !!! Notre serveur ici, utilise un 'router' avec comme url d'office : /api... etc
server.use("/api", router); //indiquer à notre server qu'il doit utiliser le router

// ! 3) Ecouter le serveur sur un port spécifique
// Même chose que server.listen(process.env.PORT || 3000)
server.listen(PORT, () => {
  console.log(`Express Server started on port ${PORT}`);
});
