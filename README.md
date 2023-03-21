### <a name="readme-top">Smart Games - A fullstack project of a virtual store

Check my LinkedIn, and Figma file of the project below:</a>

<!-- PROJECT SHIELDS -->

[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/fernandofrali/)
[![Figma][figma-shield]](https://www.figma.com/file/qGQ1Te6E3LXc5ggikAXJYO/Smart-Games---Design?node-id=0%3A1&t=tLcVFAeqDpekhh0W-1)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/FernandoFrali/smart_games">
    <img src="https://images.unsplash.com/photo-1531525727990-67532cd332c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Logo" width="120" height="120">
  </a>

<h3 align="center">Smart Games</h3>

  <p align="center">
    A fullstack project (database, back-end, front-end and mobile). Games are received from an REST API, that receives informations from a Excel file (using XLSX conversor to JSON). Project is dockerized, but you can run it without Docker too.
    <br />
    <a href="https://github.com/FernandoFrali/smart-games"><strong>Explore the docs » (coming soon)</strong></a>
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![product-screenshot](https://i.imgur.com/1TMAVty.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=for-the-badge)][react-url]
- [![React Native](https://img.shields.io/badge/-React%20Native-00a4d2?logo=react&logoColor=white&style=for-the-badge)][native-url]
- [![TypeScript](https://img.shields.io/badge/-TypeScript-0088CC?logo=typescript&logoColor=white&style=for-the-badge)][typescript-url]
- [![Node](https://img.shields.io/badge/-Nodejs-61DAFB?logo=node.js&logoColor=black&style=for-the-badge)][node-url]
- [![MySQL](https://img.shields.io/badge/-MySQL-dc712b?logo=mysql&logoColor=white&style=for-the-badge)][mysql-url]
- [![Docker](https://img.shields.io/badge/-Docker-099cec?logo=docker&logoColor=white&style=for-the-badge)][docker-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- <details>
    <summary>Docker or NPM</summary>
    <ul>
      <li><a href="https://docs.docker.com/engine/install/">Docker Install Guide</a></li>
      <li><a href="https://github.com/nvm-sh/nvm#installing-and-updating">NVM Install Guide</a></li>
      <li><a href="https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/">MySQL Install Guide (if you choose to use NPM)</a></li>
    </ul>
  </details>

> **Note**
>
> Docker is the best option for compatibility, but if you don't like it, use NPM instead. If you need help to install the project requirements, please follow the instructions above to install Docker or Node.
>
> If you choose to use NPM, don't forget to install MySQL too.
> </br>

### Installation

### How to run project with Docker

1. Install Docker on your O.S

2. Go to the root directory (where is allocated the file: docker-compose.yml)

3. Mount the image and container

   ```sh
   docker-compose up
   ```

4. Now you can access the website on http://localhost:5173

> **Warning**
>
> You can't access mobile version on Docker for now, cause mobile version have few features, and web version is so much ahead, so I choose not to 'dockerize' the mobile version. I'm focusing on Node and AWS study. So, I will focus on mobile version after web version is 100% ready (check the <a href="#roadmap">Roadmap</a>).
> </br>

### How to run project with NPM

1. Install NPM and MySQL on your O.S

2. Start MySQL service (if you get an permission error, use 'sudo' before code)
   ```sh
   > service mysql start
   ```
3. Start MySQL terminal and create a database on MySQL named `smartgamesdb`
   ```sh
   > mysql
   > CREATE DATABASE smartgamesdb
   ```
4. On your terminal, go to the back-end directory located in: `back-end/src` and install the dependencies
   ```sh
   > npm install
   ```
5. In your text editor, go to the files located in: `back-end/src/config` *database.js* and *config.json*. Now change the database settings on "connection" variable and config.json development section:
   ```sh
   // database.js
   
   const connection = new Sequelize('smartgamesdb', 'root', 'your_mysql_password', {
    host: 'localhost',
    dialect: 'mysql',
   });
   
   // config.json

    "username": "root",
    "password": "your_mysql_password",
    "database": "smartgamesdb",
    "host": "localhost",
    "dialect": "mysql"
   ```
6. Now, start the database with Sequelize-CLI and back-end server on your terminal
   ```sh
   > npx sequelize-cli db:migrate
   > npx sequelize-cli db:seed:all
   > nodemon index.js
   // Or, if nodemon gets error, use 'node index.js' instead
   ```
7. After server gets started, go to front-end directory located in: `front-end/smartgames` and run the application

   ```sh
   > npm run dev
   ```

8. The web version is working and ready to use now. You can access it on http://localhost:5173

9. To run the mobile version, go to path `front-end/smartgamesmobile` and install the dependencies
   ```sh
   > npm install
   ```
10. Then, run the mobile with Expo Go (download the app [Expo Go](https://expo.dev/client) on your device), and start the server on your terminal
    ```sh
    > npm run start
    ```
11. To finish, just scan the QRCode that Expo generates on terminal with your phone

<!-- USAGE EXAMPLES -->

## Usage

_For more examples, please refer to the [Documentation (coming soon)](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- REST API (Back-end)

  - [x] Create a method to convert Excel file to .JSON
  - [x] Create a link from Sequelize to Database and create the models (tables on Sequelize)
  - [x] Create a method to get the items from database
  - [x] Create a method to post the purchased items
  - [x] Handle errors with middlewares
  - [ ] Change back-end code to TypeScript
  - [ ] Change ORM to Prisma
  - [ ] Authentication method to login
  - [ ] Can create a store on database and publish your own games
  - [ ] GraphQL version
  - New goals will be added according to project progress

- Figma (UX / UI)

  - [x] Create the homepage
  - [x] Create the modal
  - [ ] Create login and register screen
  - [ ] Create "add games" screen
  - [ ] Create darkmode version of site
  - [ ] Create a better color palette and color identification
  - [ ] Download page
  - [ ] Renew the UI
  - New goals will be added according to project progress.

- Create a web page (Front-end)

  - [x] List database items on screen
  - [x] Modal with item details
  - [x] Can buy products sendind a protocol to database
  - [x] Create a search bar to find games
  - [ ] Can create a account
  - [ ] Can create a personal store and publish games
  - [ ] Can filter by store, price and place
  - [ ] Create a search bar to find stores
  - [ ] Dark mode
  - [ ] English version
  - [ ] Download page
  - [ ] Comments section on each game page
  - [ ] Improve perfomance
  - New goals will be added according to project progress

- Create a mobile version
  - [x] Games are listed on phone
  - [x] You can purchase game and a protocol is sended to database
  - [ ] Map that shows where have a store to buy the game
  - [ ] Convert mobile version code to Flutter
  - New goals will be added according to project progress

See the [open issues](https://github.com/FernandoFrali/smart-games/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Fernando Oliveira - [@FernandoFrali](https://twitter.com/FernandoFrali)

Linkedin - [in/FernandoFrali](https://www.linkedin.com/in/fernandofrali/)

Project Link: [https://github.com/FernandoFrali/smart-games](https://github.com/FernandoFrali/smart-games)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/FernandoFrali/smart-games.svg?style=for-the-badge
[contributors-url]: https://github.com/FernandoFrali/smart-games/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/FernandoFrali/smart-games.svg?style=for-the-badge
[forks-url]: https://github.com/FernandoFrali/smart-games/network/members
[stars-shield]: https://img.shields.io/github/stars/FernandoFrali/smart-games.svg?style=for-the-badge
[stars-url]: https://github.com/FernandoFrali/smart-games/stargazers
[issues-shield]: https://img.shields.io/github/issues/FernandoFrali/smart-games.svg?style=for-the-badge
[issues-url]: https://github.com/FernandoFrali/smart-games/issues
[license-shield]: https://img.shields.io/github/license/FernandoFrali/smart-games.svg?style=for-the-badge
[license-url]: https://github.com/FernandoFrali/smart-games/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/FernandoFrali
[product-screenshot]: images/screenshot.png
[react-url]: https://reactjs.org/
[typescript-url]: https://www.typescriptlang.org/
[native-url]: https://reactnative.dev/
[node-url]: https://nodejs.org/
[mysql-url]: https://www.mysql.com/
[docker-url]: https://www.docker.com/
[figma-shield]: https://img.shields.io/badge/-Figma-black.svg?style=for-the-badge&logo=figma&colorB=white
