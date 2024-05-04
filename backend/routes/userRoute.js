const express = require("express");

const mongoose = require("mongoose");

const User = require("../Models/useModel")

const router = express.Router();


// Create data starts
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  const User = require("./Models/useModel");

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
  console.log("app is showing");
});
// Show data ends
