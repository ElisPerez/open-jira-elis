# OpenJiraElis - Next JS

## Docker

- To run locally you need the database.

Run:

```bash
docker-compose up -d
```

"-d": __detached__ Detached mode: Run containers in the background.

Now you can use Docker Desktop to stop or start the database:

1. Open Docker Desktop.
2. Go to containers.
3. Expand 03-openjira-elis.
4. In "entries" click on "STOP" to stop or "START" to start.

## MongoDB local URL:

```bash
mongodb://localhost:27017/entriesdb
```

### Set the environment variables.
Rename __.env.template__ to __.env__ and enter the corresponding values.

### Llenar la base de datos con información de prueba

En Postman llamar: `http://localhost:3000/api/seed`

## Comando para actualizar el proyecto de Next JS a la ultima versión:

- `yarn upgrade-interactive --latest`

## Elis Antonio Perez

Follow me [Instagram](https://instagram.com/elisperezmusic).

## `Web developer`

**Note: God is good!**

