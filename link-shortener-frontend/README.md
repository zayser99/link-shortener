# Descripción

Aplicación programada con **Next.js** que  funge como Frontend en un sistema que tiene como objetivo generar URLs acortadas.

## ⚙️ Configuración inicial

1. Crea un archivo `.env` a partir del archivo `.env.template`. Modifica las variables si lo requieres.


> Nota: Si modificaste el puerto de la aplicación backend o se encuentra corriendo en otro servidor debes especificarlos en él `.env`

### Instala las dependencias:

```bash
npm install
```

## Para desarrollo (hot reload):

```bash
npm run dev
```

Esto levantará el servidor de Next.js en `http://localhost:3000` y recargará automáticamente los cambios.

## Para producción:

Construir el proyecto:

```bash
npm run build
```

Correr la aplicación compilada:

```bash
npm run start
```
---
> Nota: Es muy importante que la aplicación backend se encuentre corriendo para el correcto funcionamiento de esta aplicación.

Autor: Sergio Zaldivar
