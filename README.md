# Prueba FullStack Mid

_Tendencys_

## Objective ⌨️

Create a product view where the customer can add, modify or delete products, and have the ability to quote and generate guides.

## Beginning 🚀

### Database diagram 💾

- User

  ```json
  {
  	"id": "ObjectId",
  	"name": "String",
  	"email": "String",
  	"password": "String",
  	"phone": "String",
  	"imgProfile": "String",
  	"createdAt": "Date",
  	"updatedAt": "Date"
  }
  ```

- CatalogProducts

  ```json
  {
  	"id": "ObjectId",
  	"name": "String",
  	"description": "String",
  	"height": "Number",
  	"length": "Number",
  	"width": "Number",
  	"createdAt": "Date",
  	"updatedAt": "Date"
  }
  ```

- AccessToken
  ```json
  {
  	"id": "ObjectId",
  	"userId": "ObjectId",
  	"token": "String",
  	"expiredAt": "DateTime",
  	"createdAt": "DateTime",
  	"updatedAt": "DateTime"
  }
  ```

### Prerequisites 📋

#### .env file

It is necessary to mention that the web services and the api need environment variables that are very necessary for the operation of the service. It is necessary to mention that for the [api environment variables](api/.env.template) and [web service environment variables](web/.env.template) to work, they need to be added.

#### Database

For the database, we chose to use a local database by means of [docker compose](api/docker-compose.yml)

To lift the containers simply use the following command in the api folder

```shell
cd api
docker compose up -d
```

### Installation 🔧

To install the dependencies of the all service simply use the following command within each service

```shell
# Api service
cd api
npm install

# Web service
cd web
npm install
```

### Running 🆙

#### APi service

Depending on the environment, it is recommended to initialize the project.

- Dev
  ```shell
  npm run start:dev
  ```
- Prod
  ```shell
  npm run start:prod
  ```

#### Web service

Depending on the environment, it is recommended to initialize the project.

- Dev
  ```shell
  npm run dev
  ```
- Prod
  ```shell
  npm run build
  npm run preview
  ```

## Api Documentation 📄

- Swagger
  In code it was decided to document with swagger, the path of the documentation is as follows

  ```route
  http://localhost:3000/docs
  ```

- Postman
  Since the endpoints can send files and various complex parameters, it was also decided to make a documentation in Postman, in order to make the requests more easily.
  [Here](https://www.postman.com/BetoNajera9/workspace/todo) is the link to the collection

## Built with 🛠️

- [Nestjs](https://nestjs.com/) - The framework used in api service
- [Vue](https://vuejs.org/) - The framework used in web service
- [npm](https://www.npmjs.com/) - Dependency handler
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Typescript](https://www.typescriptlang.org/) - Language

## Author ✒️

- **Roberto Miron Najera** - _Initial Work_ - [betonajera9](https://github.com/villanuevand)

## License 📄

This project is under the (MIT) License - see the [LICENSE](LICENSE) file for details.

---

⌨️ with ❤️ by [betonajera](https://github.com/BetoNajera9) 😊
