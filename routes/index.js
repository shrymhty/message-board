const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get("/", (req, res) => {
    res.render("index", {messages})
});

router.get("/new", (req, res) => {
    res.render("new")
});

router.post('/new', (req, res) => {
  const { username, messageText } = req.body;
  messages.push({ user: username, text: messageText, added: new Date() });
  res.redirect('/');
});

module.exports = router;