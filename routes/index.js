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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

// Create new message
router.get('/new', (req, res, next) => {
  res.render('form', { title: 'Mini Messageboard' })
})

router.post('/new', (req, res, next) => {
  const newMessage = req.body;
  messages.push({ text: newMessage.messageText, user: newMessage.name, added: new Date() });
  res.redirect('/');
})

module.exports = router;
