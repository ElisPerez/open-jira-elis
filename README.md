# OpenJiraElis - Next JS

## Elis Antonio Perez

Follow me [Instagram](https://instagram.com/elisperezmusic).

## `Web developer`

**Note: God is good!**

## Docker

- To run locally you need the database.

Run:

```bash
docker-compose up -d
```

"-d": **detached** Detached mode: Run containers in the background.

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

Rename **.env.template** to **.env** and enter the corresponding values.

### Llenar la base de datos con información de prueba

En Postman llamar: `http://localhost:3000/api/seed`

## Comando para actualizar el proyecto de Next JS a la ultima versión:

- `yarn upgrade-interactive --latest`

# Middleware

## Configured matchers:

- MUST start (and end) with '/'.
- Can include named parameters: '/about/:path' matches '/about/a' and '/about/b' but not '/about/a/c'.
- Can have modifiers on named parameters (starting with ':'): '/about/:path*' matches '/about/a/b/c' because '*' is zero or more. '?' is zero or one and '+' one or more.
- Can use regular expression enclosed in parenthesis: '/about/(._ )' is the same as '/about/:path_'.

# MUITheme

```bash
// Para saber todas las propiedades del Theme MUI:
//  Son las que están en el file info/properties-theme.json
  import { useTheme } from '@mui/material';
  const theme = useTheme();
  console.log({theme});
```