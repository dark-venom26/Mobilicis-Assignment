
# Mobilicis Assignment

This project is made by using mern stack


## Run Locally

Clone the project

```bash
  git clone https://github.com/dark-venom26/mobilicis-assignment.git
```

Go to the project directory

```bash
  cd mobilicis-assignment
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to make a "config.env" file in your "api/config" folder and add the following environment variables 

`PORT`

`NODE_ENV`

`DATABASE_USERNAME`

`DATABASE_PASSWORD`


## API Reference

#### Get all users

```http
  GET /api/v1/usersDetails
```

#### Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.

```http
  GET /api/v1/lowerIncomeBmwMercedes
```

#### Male Users which have phone price greater than 10,000.

```http
  GET /api/v1/phonePriceGreater
```

#### Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.

```http
  GET /api/v1/lastNameIncludesM
```
#### Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.

```http
  GET /api/v1/notIncludeDigits
```
#### Show the data of top 10 cities which have the highest number of users and their average income.

```http
  GET /api/v1/topTenCities
```
