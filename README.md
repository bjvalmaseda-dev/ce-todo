[![Contributors][contributors-shield]][contributors-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/bjvalmaseda-dev/ce-todo">
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
    <li><a href="#usage">Usage</a></li>
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

### Built With

* [![Node.js][node]][node-url]
* [![Express][express]][express-url]
* [![Docker][docker]][docker-url]



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

To run this API you need to hace installed:
* docker and docker-compose

### Installation

1. Clone the repo
   ```sh
   $ git clone https://github.com/bjvalmaseda-dev/ce-api
   ```
2. Copy `.env.example` to `.env`
    ```sh
    $ cp .env.example .env
    ```
3. Edit `.env` and define your enviroments variables  

    `DB_USER`: User for MongoDB container

    `DB_PASSWORD`: Password for MongoDB container


## Testing

To run test execute inside:
```sh
$ docker-compose api exec npm run test
```



<!-- USAGE EXAMPLES -->
## Usage

To use the API you need to know the API endpoints

### API Reference

##### Get all tasks

```http
  GET /api/tasks
```

##### Create task

```http
  POST /api/items/
```

| Parameter | Type     | Description                               |
| :-------- | :------- | :---------------------------------------- |
| `content` | `string` | **Required**. The text content for a task |

##### Update task

```http
  PUT /api/items/:id
```

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| `id`      | `string` | **id**. The id for the task to update             |
| `content` | `string` | **Required**. The text content for a task updated |

##### Delete task

```http
  DELETE /api/items/:id
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | **id**. The id for the task to delete |






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

<!-- LINKS -->
[docker-url]: https://www.docker.com/
[express-url]: https://expressjs.com/
[node-url]: https://nodejs.org/
