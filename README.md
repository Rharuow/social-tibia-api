# Introdution

This project is an API to feed frontend application developed to apply what I learned about nodeJS with typescript. Futhermore, this project there is a architecture that I adopted as the best practice.

# Architecture

## Layers

- Controllers

> Recive request through the routes

- Services

> Work with business rule (use cases).

- Repositories

> Query builders.

- Entities

> Objects that represent database entities.

- Migrations

> Database schemas that define the structure and interrelations of data managed by relational databases. Each modification are registred here! Allowing versionament database state, that is, rollbacks and forwards can be done.

# Why was developed?

I want to be a full stack developer, and I chose nodeJS to give focus my backend skills.This project are minimalist to learn about each component that there is on backend side.

# How can I run this project?

1. First, clone this repository

```
  git clone https://github.com/Rharuow/social-tibia-api
```

2. After that, enter the folder and install dependencies using npm or yarn

NPM case:

```
  cd caf-api-node && npm install
```

YARN case:

```
  cd caf-api-node && yarn
```

3. Copy and paste .env.example file as .env file and fill the environment variables

```
  cp .env.example .env
```

4. Finally, run the server with npm or yarn

NPM case:

```
  npm run dev
```

YARN case:

```
  yarn dev
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
