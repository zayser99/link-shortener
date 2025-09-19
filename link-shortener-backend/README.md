

# Descripción

API rest programada con NestJs que se encarga de generar links acortados a partir de links dados por el usuario

## ⚙️ Configuración inicial

1. Crea un archivo `.env` a partir del archivo de `.env.template`, puedes modificar las variables si así lo requiere.

### Ejecuta los siguientes comandos en la terminal:

Instala las dependencias:
```bash
npm install
```
Crea y aplica la primera migración para generar la base de datos.
```bash
npx prisma migrate dev --name init
```
## Para probar en caliente o seguir codificando:

```bash
npm run start:dev
```

## Para lanzar a producción:
Construir el build del proyecto:
```bash
npm run build
```
Correr la aplicación compilada:
```bash
npm run start:prod
```

----


Autor:  Sergio Zaldivar