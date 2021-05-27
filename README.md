The purpose of this application is to gain a refresher on building a fullstack, web application using sequelize v6.

**WIP**
 -  Endpoints
    -  Global App
       -  GET one (ea)
    -  User
       -  POST
       -  PUT
       -  DELETE
    -  Game
       -  POST
       -  PUT
       -  DELETE
    -  World/Campaign
       -  POST
       -  PUT
       -  DELETE
    -  Feedback
    -  Testing
 -  Middleware
    -  Validate Session
    -  Headers
 -  Tables/Models
    -  Games
       -  include Robots (BOOLEAN)
 -  DB Associations
    -  Users -> World -> Game Session
 -  AWS / Heroku Deployment

**Utlizing:**
  - sequelize v6
  - express
  - bcryptjs
  - jsonwebtoken
  - pgAdmin / postgreSQL

**The aim for this is to tackle:**
  - DB Association
  - user validation
  - Deployment

**Tables/Models:**
  - **User**
    - role
      - user/Admin
    - username
      - unique
    - email 
      - unique
      - v1 will be only for verification process.  v2+ will allow for notifications regarding updates. (possibly)
    - password
      - validation

  - **Game Session**
    - Threat Level
    - City
      - Name
      - Damaged/Undamaged
    - Robots
    - Scenario
    - Characters
      - Currently being stored as a JSON within an Array
    - Battle
      - ENUM value ('First', 'Second')
    - Difficulty

  - **Worlds** (Campaigns)
    - World Name
      - primarily for campaign tracking but should be flexible for custom games.
    - Game Session Association.

  - **Feedback**
    - title
    - message
    - Allow Questions
      - BOOLEAN
      - This will allow users to note if it is okay for me to reach out to them regarding their feedback per the email associated to their account.

**Current Status**
 -  Tables created:
    -  User
    -  Games
    -  Worlds
 -  (GET) findall() functioning for all created tables.  
 -  Create (POST) game session working.

**How Users will Interact**
  **Under Falling Skies** is a solo tabletop dice management game.  Players are able to create custom game sessions prior, during, or after a short campaign that is offered.  Within the game, there is a small tracking sheet for users to note their personal progress throughout each session.  This web application will provide a place where users can not only track their progress for a multitude of different campaigns but detail custom games.  

  - Official URL: https://czechgames.com/en/under-falling-skies/
  - Here is the BGG link: https://boardgamegeek.com/boardgame/306735/under-falling-skies

**Version 2+ Ideas**
 - User Forum boards