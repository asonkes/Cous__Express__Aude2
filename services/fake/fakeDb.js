// Représente notre fausse base données

const categories = [
  {
    id: 1,
    name: "Administratif",
    icon: "📃​",
  },
  {
    id: 2,
    name: "Decin",
    icon: "✏️​",
  },
];

const tasks = [
  {
    id: 1,
    name: "Faire ses impôts",
    before: "2026-06-01",
    by: "Joël",
    to: "Christine",
    category: 1,
    isDone: false,
  },
  {
    id: 2,
    name: "Fer une aquarelle de paysage enneigé",
    before: "2026-01-31",
    by: "Aude",
    to: "Aurélien",
    category: 2,
    isDone: false,
  },
];

// Si 2 objets à exporter...
module.exports = { categories, tasks };
