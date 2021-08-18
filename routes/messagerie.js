/**
 * Route Messagerie
 */

// Express
const express = require('express');
// Methode express
const router = express.Router();

//Controller
const messagerieCtrl = require('../controllers/messagerie');

const auth = require("../middleware/auth");

const multer = require("../middleware/multer-config")
/**
 * Routes
 */

// Envoie un message sur le fil d'actualité
router.post('/publier', auth, multer, messagerieCtrl.publier);

// Commente un message sur le fil d'actualité
router.post('/coment/:id', auth, multer, messagerieCtrl.coment);

// Récupére le fil d'actualité
router.get('/', auth, multer, messagerieCtrl.update);

// Récupére un message et ses commentaires
router.get('/id', auth, multer, messagerieCtrl.updateId);

// Récupére un message et ses commentaires
router.delete('/id', auth, multer, messagerieCtrl.delete);

module.exports = router;