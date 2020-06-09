const express = require("express");
const User = require("../model/User");
const route = express.Router();

const uuid = require('uuid');

/***** geting memory from database on pageload */
route.get("/", (req, res) => {
  let memoriesStore = [];

  User.find().sort({date: -1})
    .then((memory) => {
      memoriesStore.push(memory);
      res.render("index", {
        memoriesStore,
      });
    })
    .catch((err) => console.log(err));
});


/************inserting new memory */
route.post("/", (req, res) => {
  const { title, memory } = req.body;

  let errors = [];

  if (!title || !memory) {
    errors.push({ msg: "Please fill all the fields" });

    if (errors.length > 0) {
      res.render("index", {
        errors
      });
    }
  } else {
    const newUser = new User({
      id: uuid.v4(),
      title,
      memory,
    });

    newUser
      .save()
      .then((user) => {
      })
      .catch((err) => console.log(err));
  }
  res.redirect("/");
});

///////////////*************Udating memory */

route.post("/update", (req, res) => {
  const { id, title, memory } = req.body;

  User.updateOne(
    { id: id },
    {
      title: title,
      memory: memory,
      date: Date()
    },{
      upsert: true
    }
  )
    .then(() => {
     // res.render('index')
    })
    .catch((err) => console.log(err));

  console.log(id, title, memory);
  res.redirect("/");
});

/*******deleting memory */

route.post("/delete", (req, res) => {
  const { id} = req.body;
  
  User.remove({id: id}).then(() => console.log('memory deleted')).catch(err => console.log(err))
  res.redirect('/')
});

module.exports = route;
