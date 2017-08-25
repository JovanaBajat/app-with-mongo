const express = require("express");

const Task = require("./models/tasks.js");

const router = express.Router(); //function d'express, gestionnaire de routes

//Afficher la liste des taches
router.get("/", (req, res) => {
  Task.find((error, tasks) => {
    res.render("homepage", { tasks });
    // console.log(tasks);
  });
});

// Ajouter un task dans la db à partir des données du formulaire
router.post("/create", (req, res) => {
  console.log(req.body);
  const newTask = new Task(req.body);
  newTask.save(() => {
    res.redirect("/");
  });
});


//Supprimer une task
router.get("/:id/delete", (req, res) => {
  Task.findByIdAndRemove(req.params.id, error => {
    res.redirect("/");
  });
});

//Editer une task
router.get("/:id/edit", (req, res) => {
  Task.findById(req.params.id, (error, task) => {
    res.render("edit", { task });
  });
});

router.post("/:id/edit", (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body, error => {
    res.redirect("/");
  });
  // console.log(req.body);
});

module.exports = router;
