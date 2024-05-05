const express = require("express");

// const mongoose = require("mongoose");

const User = require("../Models/useModel");

const router = express.Router();

router.use(express.json());

// Create data starts
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const userCreated = await User.create({
      name: name,
      email: email,
      age: age,
    });

    res.status(201).json(userCreated);
  } catch (error) {
    console.log(error);
    res.send(400).json({ error: error.message });
  }
});
// Create data ends

// Show data starts
router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    res.send(500).json({ error: error.message });
  }
  // console.log("app is showing");
});
// Show data ends

//get single user starts
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.send(500).json({ error: error.message });
  }
  console.log("app is showing");
});
//get single user ends

// DELETE operations starts

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findByIdAndDelete({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.send(500).json({ error: error.message });
  }
  // console.log("app is showing");
});

// DELETE operations ends

// PATCH operation starts
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.send(500).json({ error: error.message });
  }
  // console.log("app is showing");
});

// PATCH operations ends

module.exports = router;
