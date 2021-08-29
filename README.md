# Back-End

Ce projet necessite node.js ainsi qu'un terminal sql

il a été réalisé avec vue et mysql

## Project setup

Installer et lancer le front-end en suivant les instructions à cette adresse:
https://github.com/YoshiOnly/Projet_7_Front-End

Demarrer la database sql avec le code du fichier: __initialisationBdd__

Installer les packages avec la commande 
```
npm install
```

remplir le fichier .env avec vos information
```
DB_HOST = localhost (si lancement en local)
DB_PORT = Votre_port
DB_USER = Votre_nom_user
DB_PASS = Votre_Mot_de_Passe
DB_NAME = groupomania
DB_LANG = mysql
TKN_SECRET = Votre_Token_Secret
```

### launch serve

Démarer le serveur avec la commande: 
```
nodemon server
```
et se rendre sur l'host indiqué (port 8080 en local)

### administration

Aprés avoir enregistrer le premier user utiliser le code sql du fichier __setAdmin__ pour passer le compte en administrateur

Plus d'info?

https://openclassrooms.com/fr/paths/185/projects/677/assignment :sunny: