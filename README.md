[![Contributors][contributors-shield]][contributors-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://ce-todo-vercel.app">
    <img src="docs/ce_logo.png" alt="Logo" height="80">
  </a>

  <h3 align="center">CE Tasks App</h3>

  <p align="center">
    Task App for Cuban Engineer technical test (Middle Level)
    <br /> 
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>   
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
    <li><a href="#testing">Testing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a Task app created for the React Developer technical test for Cuban Engineer. This app permit: 

* Create a task
* Update a task
* Delete a task

[![Mobile view][mobile]](https://ce-todo-vercel.app)
[![Mobile editing view][mobile-editing]](https://ce-todo-vercel.app)

[![Desktop view][desktop]](https://ce-todo-vercel.app)


### Built With

* [![Node.js][node]][node-url]
* [![Express][express]][express-url]
* [![Docker][docker]][docker-url]



<!-- GETTING STARTED -->
## Getting Started

To run this App locally you should follow the next steps:

### Prerequisites

To run this app you need have installed:
* node and npm (yarn)


### Installation

1. Clone the repo
   ```sh
   $ git clone https://github.com/bjvalmaseda-dev/ce-api
   ```
2. Copy `.env.example` to `.env`
    ```sh
    $ cp .env.example .env
    ```
3. Edit `.env` and define your environments variables  

    `REACT_APP_API_URL`: url base for the api
  
    *To use the api provided for the developer use [https://ce-api.up.railway.app]*
4. Run the app in development mode
   ```sh
   $ yarn start
   ```
5. To run in production you have to build the app and server in a static server
   ```sh
   $ yarn build
   $ yarn global add serve
   $ serve -s build
   ``` 



## Testing

To run test execute inside:
  ```sh
  $ yarn test
  ```
To run e2e test run
  ```sh
  yarn test:e2e
  ```
  *To make e2e test you need to run the api locally, [see how here][api-github-url]*


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- CONTACT -->
## Contact

Bárbaro Javier Valmaseda - [@bjvalmaseda](https://twitter.com/bjvalmaseda)

Project Link: [https://github.com/bjvalmaseda-dev](https://github.com/bjvalmaseda-dev/ce-api)



<!-- MARKDOWN LINKS & IMAGES -->

<!-- BADGES -->
[express]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[node]: https://img.shields.io/badge/Node%20JS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[docker]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white

<!-- IMAGES -->
[logo]: docs/ce_logo.png
[mobile]: docs/mobile.png
[mobile-editing]: docs/mobile-editing.png
[desktop]: docs/desktop.png

<!-- LINKS -->
[docker-url]: https://www.docker.com/
[express-url]: https://expressjs.com/
[node-url]: https://nodejs.org/
[api-github-url]: http://github.com/bjvalmaseda-dev/ce-api
