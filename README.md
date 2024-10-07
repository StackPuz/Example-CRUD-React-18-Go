# Example-CRUD-React-18-Go
- The example shows how to Building a React CRUD App with a Go API and using MySQL as a database.
- The article of this repository https://blog.stackpuz.com/building-a-react-crud-app-with-a-go-api
- To find more resources, please visit https://stackpuz.com

## Prerequisites
- Node.js
- Go 1.21
- MySQL

## Installation
- Clone this repository `git clone https://github.com/stackpuz/Example-CRUD-React-18-Go .`
- Change directory to React project. `cd view`
- Install the React dependencies. `npm install`
- Change directory to Go project. `cd ../api`
- Install the Go dependencies. `go mod tidy`
- Create a new database and run [/database.sql](/database.sql) script to create tables and import data.
- Edit the database configuration in [/api/.env](/api/.env) file.

## Run project

- Run React project. `npm run dev`
- Run Go API project `go run main.go`
- Navigate to http://localhost:5173