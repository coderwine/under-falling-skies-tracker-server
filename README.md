The purpose of this application is to gain a refresher on building a fullstack, small web application using sequelize v6.

Utlizing:
    - sequelize v6
    - express
    - bcryptjs
    - jsonwebtoken
    - pgAdmin / postgreSQL

The aim for this is to tackle:
    - DB Association
    - user validation
    - Deployment to AWS

Tables:
    - User
      - user/Admin
    - Game Session
      - Quick Session / Campaign
    - Worlds (Campaigns)
      - Session Association.
    - feedback

**Current Status**
 -  Tables created:
    -  User
    -  Games
    -  Worlds
 -  (GET) findall() functioning for all created tables.  
 -  Create (POST) game session working.

**WIP**
 -  Build out endpoints for all controllers
 -  Build Middleware
    -  Validate Session
    -  Headers
 -  Build feedback table for Admin use
    -  Controller for feedback
 -  DB Associations
 -  AWS Deployment