# Web API avec Express

Une API c'est un serveur qui va recevoir une "requête", la traiter, potentiellement se "connecter" à des données et renvoyer une "réponse" qui possèdera un statut (httpCode) ==> (ex : 200, 201, 400, 500) et potentiellement des données renvoyées (json ou XML).

==> Express SERT JUSTE à "FACILITER LES REQUÊTES" ==> à voir plus ne détails pour être sûre d'avoir compris !!!

# Les requêtes

Les requêtes(c'est ce que NOUS on envoie) sont envoyées via HTTP et possèdent plusieurs informations qui vont permettre au serveur de comprendre la demande.

# Minimum syndical, il nous faut pour que cela fonctionne :

- **Verbe (Verb)** : Méthode (fonction) de la requête.
  ==> Permet d'indiquer au serveur l'action que l'on veut réaliser
  _ **GET** : Récupérer quelque chose (donnéés, etc, n'importe quoi)
  _ **POST** : Envoyer quelque chose (ex : qd l'utilisateur créé son compte, il envoie ses données)
  _ **PUT** : Modification totale de quelque chose (là, il faudra, tout envoyé et modifier les données ==> si gros objet)
  Ex :
  "lastname": "Beurivé",
  "firstname" : "Aude",
  "birthdate": "1989-10-16"
  _ **PATCH** : Modification partielle de quelque chose (souvent pour des images) \* **DELETE** : Suppression de quelque chose

- **Url** : Sur quoi et comment on veut faire notre requête. Elle peut contenir plusieurs éléments.
  - **Une partie statique**:
    Ex : http://localhost:3000/api/produits
  - **Des paramètres** (partie dynamique):
    Ex : http://localhost:3000/api/produits/42 (42 = id du produit ==> elle est dynamique, 42 = paramètre)
  - **Une query** (optionnel) ==> ça nous permet de rajouter des filtres (cest ce qui se trouve après le "?" dans l'url ==> ici il s'agit de la catégorie "bricolage" avec les prix les plus bas de "0" à "15" )
    Ex : http://localhost:3000/api/produits/?category=bricolage&lowPrice=0&highPrice=15

* **Body** (Corps de la requête) ==> optionnel :
  Il représente ce qu'on doit envoyer avec la requête (json, formData(c'est sous ce format que les images sont envoyées), XML)

* **Headers** (En tête de la requête) ==> toutes les requêtes ont des "headers".

- Il s'agit d'informations à propos de la requête (openclassrooms ==> CORS )

> [!Note]
> Certaines choses seront utilisées avec certains verbes en particulier
> Ex :

- **GET** http://localhost:3000/api/produits (on utilise le "verb" + url statique, on récupère tous les produits)
- **GET** http://localhost:3000/api/produits/42 (on utilise le "verb" + url statique + paramètre (on récupère le produit dont l'id est 42))
- **GET** http://localhost:3000/api/produits?offset=10&limit=10 (Verb + url statique + query (filtre) (Récupérer le sproduits partant du 10ème et en sélectionnant les 30 suivants))

- **POST** http://localhost:3000/api/produits

  > body : {"name": "Patate", "price": 4.23}
  > Verb + url statique + body
  > Ajouter un nouveau produit avec les infos présentent dans le body

- **PUT/PATCH** http://localhost:3000/api/produits/42

  > body : { "name": "Patate", "price": 4.23}
  > Verb + url statique + params + body
  > Modifier globalement ou partiellement le produit dont l'id est 42

- **DELETE** http://localhost:3000/api/produits/42
  > Verb + url statique + delete
  > Supprimer le produits dont l'id est 42

# Les réponses

L'API va toujours renvoyer une réponse qui sera composée de :

- **Status** (statusCode, HTTPCode) : un code qui permet de savoir comment s'est passé la requête
  - 2XX (les 200) : les codes de succès
  - 3XX (les 300) : indique une redirection
  - 4XX (les 400) : indique qu'une erreur connue de l'API est survenue
  - 5XX (les 500) : indique une erreur de serveur (serveur ne répond pas, db cassée)
- **des données (optionnel)** : Certaines requêtes, notamment les GET vont nous renvoyer du json (ou XML, fichiers, ...)

# Principes d'API REST

Une API REST(Ful) ==> Representational State Transfert doit respecter les principes suivants :

- **Stateless** (sans état) : L'API ne sauvegarde aucune données/état utiliateur. Si besoin d'identifier qui fait la requête, cette information devra être transmise dans la requête (query, headers, cookies).

- **Interface Uniforme** : L'API doit utiliser des modèles de données uniforme et cohérents (ex : si "lastname", pas après "lastName") en entrée et en sortie. Utiliser les bons "Verb" (généralement en anglais). Ex : "password" pour "mot de passe".

- **Ressources** : Les données sont vues comme des ressources et les url doivent être parlantes..
  Ex : http://localhost:3000/api/tasks (pour les tâches)
  Ex : http://localhost:3000/api/users (pour les utilisateurs)
  Ex : http://localhost:3000/api/users/42/tasks (pour l'utilisateur 42, on récupère toutes ses tâches)

- **Couche & cache** : L'API devrait idéalement être séparée en plusieurs couches logiques (architecture). Les requêtes devraient idéalement être mises en cache.

# Initialiser un projet Node

# Télécharger Node

==> je l'ai donc pas de soucis !!!

# Initialiser un dossier comme étant un projet Node

==> **npm init** (Aude met "app.js" et openClassRooms "server.js")

> Tout un tas de questions sont posées, tout mettre "enter" sauf "fichier d'entrée" (voir ci-dessus)
> Fichier "package.json" est alors créé (et ce fichier reprend le résumé de ce que l'on a mis) dans un objet appelé **scripts** mais aussi, les dépendances du projet qui se trouveront dans un objet appelé **dependencies** (les dépendances sont une liste de librairie "js" dont notre projet a besoin ).

> [!warning]
> Attention à ce moement ci, il faut penser à créer le "gitignore" et mettre "node-module" dedans.
> Soit on le fait à la main
> Soit on a notre extension "Visaul Studio Code" ("gitignore").
> Grâce à cette extension, on pourra :

- Soit on a appuye sur "F1" ou "CTRL + MAJ + P " et on doit après normalement appuyer sur "node" ==> moi je l'ai pas...

# Créer un fichier app.js

Créer un fichier à la racine du projet appelé "app.js" (index.js si vous avez laissé la valeur par défaut).

- Rajouter dans le fichier app.js pour vérifier que ça fonctionne :
  **console.log("Serveur node ok !!!");**

- Aller dans package.json et rajouter dans "scripts" (avant "test") :
  **"start": "node app.js",**
  ==> Du coup pour lancer **node** maintenant, on devra faire "npm start"

# Installer Express

Tapez dans la console :

- npm install (ou npm i) + nom de la librairie que l'on veut (ici => express)
- Donc npm install express (node_modules apparaît + package-lock.json)

#Bonus : Récupérer un projet Node/Express
Quabd vous allez récupérer un projet Node(Express, React, Angular, etc...), il faudra refaire un node_modules avec toutes les dépendances du projet.
Pour cela, rien de plus simple:

- **npm i**

# Création d'un serveur Web avec Express

// Ecouter le serveur sur un port spécifique
// Même chose que server.listen(process.env.PORT || 3000)
server.listen(3000, () => {
console.log(`Express Server started on port ${3000}`);
});

# Restart automatique du serveur en cas de notification

> Cela permet d'arrêter de devoir tjs fermer et redémarrer le serveur !!!

## Méthode 1 : Nodemon

> OpenclassRooms et Aude :
> [!nodemon] npm i -D nodemon (pour désinstaller npm unistall nodemon)

> Il faudra ensuite rajouter dans le fichier "package.json" un nouveau script :
> **"start": "nodemon app.js"**

## Méthode 2: watch natif de Node depuis la version 18+

> Il suffit de rajouter un nouveau script dans le "package.json"
> "start": "node app.js",
> "dev": "node --watch app.js",
> ==> **Pour lancer en mode "dev" ==> faire "npm run dev"**

## Les variables d'environnement

Ce sont des variables stockées sur votre machine.
On y stocke des infos de connection ou propres à la machine etc.

Elles sont accessibles en "JS" dans un objet process via sa propriété **"process.env"**
JS:
console.log(process.env).

# Création des nouvelles variables d'environnement

On va créer un fichier ".env" dans lequel on va mettre nos variables d'environnement.
Ces infos étant souvent confidentielles, ce type de fichier est souvent ignoré par notre gitignore.
!!! pour vérifier si ignoré par "gitignore" => fichier grisé !!!

==> Comme il ne sera jamais mis sur GIT, pour que les autres personnes sachent quelles variables ils doivent mettre en place chez eux et avec quel nom, on fait souvent un fichier **.env.example**

# Pour mettre les variables d'environnement présentes dans notre fichier .env dans les variables de la machine, 2 solutions :\*\*

- Via la librairie [dotenv](https://www.npm.js.com/package/dotenv)
- Via une "nouvelle" fonctionnalité native de Node donc directement dans notre script dans le package.json:
  "scripts": {
  "start": "node --env-file=.env app.js",
  "dev": "node --watch --env-file=.env app.js",
  "test": "echo \"Error: no test specified\" && exit 1"
  }

# Architecture de notre projet

<img src="" />

\> demo_express
|- controllers\
|- middlewares\
|- routes\
|- services\
|- app.js
|- .env\
|- package.json

> 1. routes : définition de toutes les routes de notre API (Verb + url statique + params)

> 2. controllers : définition de ce que renvoie l'api

> 3. services : logique d'accès aux données

> 4. middlewares : c'est une fonction qui va intercepter la requête (ou une erreur) afin d'y ajouter/consulter des informations et choisir de continuer la requête ou de l'arrêter.(Il en existe 3 types : router-lvl, app-lvl, error-handler)

## Définition des routes

On va commencer par le point d'entrée de toutes nos routes en créant un fichier **index.js** dans le doffier **routes**

---

## Seconde PARTIE - 06-01-2026

# Les logiciels d'API

Pour pouvoir tester toutes nos routes d'API, nous avons plusieurs outils à disposition :

1. [Postman] (https://www.postman.com)
2. [Insomnia] (https://insomnia.rest)
3. [Thunder Client] ==> extension Visual Studio Code ===> pas bon !!!

# Insomnia (ou utilisera celui-là dans le cours ==> refaire exo à la maison avec Postman) ==> fait !!!

---

## Cours du 07-01-2026

# Les controlleurs

Les controlleurs sont les endroits où on va gérer la requête(ce qui rentre req et ce qui sort res).
En général, on fait un controlleur par type de ressource.

Un controlleur est un objet qui contient des fonctions.
Chaque fonction reprsentera une action que l'on eut faire sur la ressource.

- **Ex code :**

  > On va faire autant de fois des 'fonctions' qu'il y a de tâches
  > Code :

  const taskController = {
  getAll: (req, res) => {},

  getById: (req, res) => {},

  getByUser: (req, res) => {},

  insert: (req, res) => {},

  update: (req, res) => {},

  updateStatus: (req, res) => {},

  delete: (req, res) => {},
  };

> Il ne nous reste plus qu'à relier la **route** avec sa fonctionnalité !!!

- **Code:**

1. On importe le controller
   Ex :
   const taskController = require("../controllers/task.controller");
   const taskController = require("../controllers/task.controller");

   /\*_ Exemple d'une autre façon d'écrire les 'routes' _/
   const taskRouter = require("express").Router();

   taskRouter.route("/").get(taskController.getAll).post(taskController.insert);

   taskRouter
   .route("/:id")
   .get(taskController.getById)

   /** Modification, on renvoie la chose qui a été créé ==> donc 200 \*/
   .put(taskController.update)
   .delete(taskController.delete)
   /** Ici, on veut changer 'isDone' \*/
   .patch(taskController.updateStatus);

   /\*_ Ca c'est pour trouver toutes les tâches d'un utilisateur _/
   taskRouter.get("/user/:name", (req, res) => {
   res.send(`Voici les tâches de ${req.params.name}`, 200);
   });

   module.exports = taskRouter;

- **Par contre dans le taskController**

  > On met une un 'status 501', la route existe bien mais le code derrière n'a pas été implanté ou développé :
  > Code :

  const taskController = {
  getAll: (req, res) => {
  res.sendStatus(501);
  },

  getById: (req, res) => {
  res.sendStatus(501);
  },

  getByUser: (req, res) => {
  res.sendStatus(501);
  },

  insert: (req, res) => {
  res.sendStatus(501);
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

module.exports = taskController;

---

- **Les DTO**
  > Les DTOs(Data Transfert Object) se sont des représentations des objets.
  > Telles qu'elles entrent ou sortent des API.
  > Parfois à l'insertion, l'objet n'est pas identique à celui en db, donc on aura besoin d'un DTO d'entrée.
  > Parfois les objets renvoyés par l'API auront besoin d'avoir des données supprimées ou ajoutées, on fera donc un DTO pour ça.

* **Les services**

  > C'est l'endroit où on va gérer les accès aux données et la logique propre à la recherche / création / modification / suppression de ces données.
  > Nos contrôleurs vont appeler les bonnes méthodes dans les services appropriés.
  > En général, on fait un service par type de ressource.

* **Dans un 1er temps**
  > On va travailler avec une simulation de base de données (fakeDB) avec de simples tableaux d'objets js.

> [!warning]
> Nos tableaux ne seront pas sauvegardés et seront remis à 0 à chaque lancement du serveur donc à chaque modification.

> [!important]
> Plus tard, nous verrons comment [ se connecter à une base de donnéés]

> [!note]
> Certaines données devront être cryptées dans la base de données (c'est notamment le cas des mots de passe) pour qu'elles ne soient pas lisibles à l'oeil nu.
> [Nous le feront dans les services]
