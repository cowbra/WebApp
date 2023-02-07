# Frontend - Web Applications - Hugo Sanchez
 
## 🌟 Goal

> Faire un Frontend qui permet d'afficher, modifier et supprimer les locations en fonction du rôles des utilisateurs

##  Informations

1. Le back utilisé est également dans ce répertoire (dossier ./serveur). J'ai du modifier le port d'écoute (--> port 5000)
2. Une erreur que j'ai pas su identifier persiste : Lors du clic sur 'Locations' sur la page d'accueil, il faut parfois actualiser la page pour que le CSS soit correctement pris en compte (et dès fois non).

## 🗒 Dépendances

1. Dans un terminal sur le dossier `serveur` :
   > ```shell
   >  npm install
   >  npm run start
   > ```
2. Dans un terminal sur le dossier `client` :
   > ```shell
   >  npm install
   >  npm run dev
   > ```


## 🔨 User Stories
    - [x] US1 : As a random visitor, I want to be able to register an account or log-in, so I can access all features

    - [x] US2: As a random visitor, I want to be redirected to the login/register page when I click on “location" tab, so that I know I must log-in to see its content

    - [x] As a logged-in user, I want to see locations and be able to click on one location to open a modal containing details, so that the website is useful

    - [x] US4: As an “admin" user, I want to see a “Add Location” button in the location page, so that I can create a new location

    - [x] US5: As an “admin" user, I want to see a button to edit locations in the array of locations, so that I can edit existing locations

    - [x] US6: As an “admin" user, I want to see a button to delete locations in the array of locations so that I can delete existing locations



## Now that you have unlocked your skills 🔓, it's up to you 👊!
   > ### Docker implementation (not started yet !) :  [docker-compose](docker-compose.yml)